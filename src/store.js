import { configureStore } from "@reduxjs/toolkit";
import diaryCardReducer from "./slices/diaryCardSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./sagas/saga";

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store =  configureStore({
    reducer: {
        diaryCard: diaryCardReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(saga)