import { configureStore } from "@reduxjs/toolkit";
import nicknameReducer from "./nicknameSlice.js";

export const store = configureStore({
  reducer: {
    nickname: nicknameReducer,
  },
});
