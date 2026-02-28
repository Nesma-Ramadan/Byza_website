
import { configureStore } from "@reduxjs/toolkit";
import { allProductReducer } from "./AllProductSlice";
import { productDetailsReducer } from "./ProductDetailsSlice";
import { cartReducer } from "./Cart";
import { authReduser } from "./authSlice";


export const store = configureStore({
  reducer: {
    // حاله المستخدم
    user:authReduser,
    // حالة كل المنتجات
    allProducts: allProductReducer,
    // حالة تفاصيل منتج واحد
    productDetails: productDetailsReducer,
    // محتويات ال cart
    cart: cartReducer ,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;