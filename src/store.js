import { configureStore } from "@reduxjs/toolkit";
import diaryCardReducer from "./pages/DiaryHome/DiaryHomeSlice.js";
import createSagaMiddleware from "redux-saga";
import { DiaryHomeSaga } from "./pages/DiaryHome/DiaryHomeSaga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    diaryCards: diaryCardReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['diaryCard/addDiaryCard'],
      },
    }).concat(middleware),
});

sagaMiddleware.run(DiaryHomeSaga);
