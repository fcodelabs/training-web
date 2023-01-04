import { configureStore } from "@reduxjs/toolkit";
import userRedux from "./userRedux";

export const store = configureStore({
  reducer: {
    user: userRedux,
  },
});
