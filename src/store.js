import { configureStore } from "@reduxjs/toolkit";
import diaryCardReducer from "./slices/diaryCardSlice";

export const store =  configureStore({
    reducer: {
        diaryCard: diaryCardReducer,
    },
});