import { configureStore } from "@reduxjs/toolkit";
import nicknameReducer from "./nicknameSlice.js";
import diaryCardReducer from "./diaryCardSlice.js";
import createSagaMiddleware from "redux-saga";
import {DiaryHomeSaga} from '../pages/DiaryHome/DiaryHomeSaga'

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    nickname: nicknameReducer,
    diaryCards: diaryCardReducer,
  },
  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middleware),


});

sagaMiddleware.run(DiaryHomeSaga);