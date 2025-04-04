import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../components/cartPage/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
