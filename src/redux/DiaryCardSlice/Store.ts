import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./DiaryCardSlice";

const store = configureStore({
  reducer: {
    diaryCardSlice: rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
