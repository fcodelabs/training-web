import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from './diarySlice'

export default configureStore({
    reducer: {
        diary: diaryReducer,
    }
})