import { configureStore } from "@reduxjs/toolkit";
import diaryCardReducer from "./pages/Home/HomeSlice";
import createSagaMiddleware from "redux-saga";
import HomeSaga from "./pages/Home/HomeSaga";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    diaryCard: diaryCardReducer,
  },
  middleware: middleware,
});

sagaMiddleware.run(HomeSaga);

export default store;
