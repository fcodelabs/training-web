//import {combineReducers } from 'redux';
//import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import { configureStore } from '@reduxjs/toolkit';
//import { Reducer } from 'react';
//import { Reducer } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';

import createSagaMiddleware from "redux-saga";
import dataSaga from './saga/dataSaga';
const saga = createSagaMiddleware();



// const reducer = combineReducers({
//   data: DataReducer,
  
// });

const store = configureStore({
    reducer : {
        dataReducer:dataReducer,
    },
    middleware: [saga],
});

saga.run(dataSaga);

export default store;