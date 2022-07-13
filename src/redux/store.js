import { configureStore } from "@reduxjs/toolkit";
import diarySlice from "./diarySlice";

const store = configureStore({
    reducer: { diaryItems: diarySlice.reducer },
});
export default store;
