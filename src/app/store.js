import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice';

import createSagaMiddleware from "@redux-saga/core";

const  saga =  createSagaMiddleware();

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    middleware:[saga]
})



export default store;

