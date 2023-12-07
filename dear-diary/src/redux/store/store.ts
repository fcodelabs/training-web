import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../slices/userSlice";
import diaryCardReducer from "../slices/diaryCardSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        diaryCard: diaryCardReducer,
    },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;