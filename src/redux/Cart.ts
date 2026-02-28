import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItemType, productsType } from "./type";

type CartState = {
  cart: CartItemType[];
};

const cartSlice = createSlice({
  name: "CartData",
  initialState: {
    cart: [],
  } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<productsType>) => {
      const existing = state.cart.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.cart.find((i) => i.id === action.payload.id);
      if (item) {
        if (action.payload.quantity <= 0) {
          state.cart = state.cart.filter((i) => i.id !== action.payload.id);
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;