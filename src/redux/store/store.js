import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../reducers/cardReducer";

export const store = configureStore({
    reducer: {
        cards: cardReducer,
    }
});