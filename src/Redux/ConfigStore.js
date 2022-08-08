import {combineReducers } from 'redux';
//import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import { configureStore } from '@reduxjs/toolkit';
//import { Reducer } from 'react';
//import { Reducer } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';




// const reducer = combineReducers({
//   data: DataReducer,
  
// });

const store = configureStore({reducer : {dataReducer:dataReducer}});



export default store;