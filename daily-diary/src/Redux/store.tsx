import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./slices/addCardSlice";

export const store = configureStore({
  reducer: {
    addCard: cardsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
