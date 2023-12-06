import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlice";
import diaryCardReducer from "../features/diarycard/diaryCardSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        diaryCard: diaryCardReducer,
    },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;