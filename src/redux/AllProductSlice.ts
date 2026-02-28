import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { type AllProductStateType, type productsType } from "./type";




// async thunk action to fetch all products

export const getAllProducts = createAsyncThunk<productsType[], void>(
  "allproductData/getAllProducts",
  async (_, thunkAPI) => {
    return axios
      .get<productsType[]>("https://fakestoreapi.com/products/")
      .then((res) => {
        console.log(res.data) // optional: للتأكد
        return res.data // مهم ترجع البيانات
      })
      .catch((error) => {
        console.error(error)
        // reject thunk لو حصل خطأ
        return thunkAPI.rejectWithValue(error.message || "Failed to fetch products")
      })
  }
)




// initial state for the slice

const intialStates: AllProductStateType = {
    allproduct: [],
    isLoading: false,
    error: null

}


// create slice

 const allProductSlice = createSlice({
    name: "allproductData",

    initialState: intialStates,

    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true

        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.allproduct = action.payload
            console.log(action.payload,"paylaod")
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message || "Failed to fetch products"

        })
        


    }


});

export const allProductReducer = allProductSlice.reducer;
