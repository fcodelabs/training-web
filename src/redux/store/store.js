import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../reducers/cardReducer";
import userReducer from "../reducers/userReducer";

export const store = configureStore({
    reducer: {
        cards: cardReducer,
        users: userReducer,
    }
});