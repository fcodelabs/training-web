import { configureStore } from "@reduxjs/toolkit";
import {diaryReducer} from "./diaryReducer"

export const store = configureStore({
    reducer:{
        diary: diaryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;