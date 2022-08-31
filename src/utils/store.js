import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../pages/Todo/todoSlice";
import rootSaga from "../pages/Todo/sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todo: todoReducer.reducer,
  },

  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
