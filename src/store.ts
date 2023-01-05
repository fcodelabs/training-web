import { configureStore } from "@reduxjs/toolkit";
import userRedux from "./Pages/DiaryHome/userRedux";

export const store = configureStore({
  reducer: {
    user: userRedux,
  },
});
