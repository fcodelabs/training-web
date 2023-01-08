import { configureStore } from "@reduxjs/toolkit";
import diaryCardReducer from "./pages/DiaryHome/diaryCardSlice";

const store = configureStore({
  reducer: {
    diaryCard: diaryCardReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
