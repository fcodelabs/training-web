import { configureStore } from "@reduxjs/toolkit";
import diaryReducer from "./diarySlice";
import createSagaMiddleware from "redux-saga";
import diarySaga from "./diarySaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    diary: diaryReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(diarySaga);

export default store;
