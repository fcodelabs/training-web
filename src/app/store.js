import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/TodoSlice";

export const store = configureStore({
  reducer: {
    carts: cartReducer,
  },
});
