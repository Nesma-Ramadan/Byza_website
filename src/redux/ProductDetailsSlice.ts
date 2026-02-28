import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { productsType } from "./type";
import axios from "axios";

// تعريف شكل الـ state الخاص بتفاصيل المنتج
interface ProductDetailsState {
  productDetails: productsType | null;
  isLoading: boolean;
  error: string | null;
}

// thunk غير متزامن لجلب تفاصيل منتج عن طريق الـ id
export const getProductById = createAsyncThunk<
  productsType,
  number,
  { rejectValue: string }
>("productDetails/getProductById", async (id, thunkAPI) => {
  try {
    const res = await axios.get<productsType>(
      `https://fakestoreapi.com/products/${id}`
    );
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error?.message || "Failed to fetch product details"
    );
  }
});

const initialState: ProductDetailsState = {
  productDetails: null,
  isLoading: false,
  error: null,
};

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        // payload نوعه string (من rejectWithValue) فنستخدمه مباشرة، وإلا نستخدم رسالة الخطأ الافتراضية
        if (action.payload) {
          state.error = action.payload;
        } else {
          state.error =
            action.error.message || "Failed to fetch product details";
        }
      });
  },
});

export const productDetailsReducer = productDetailsSlice.reducer;