import { createStore, compose, applyMiddleware } from "redux";
import { all } from "redux-saga/effects";
import userSaga from "../Page/Home/userSaga";
import createSagaMiddleware from "@redux-saga/core";


import reducer from "../Page/Home/reducer";

function* rootSaga() {
  yield all([userSaga()]);
}


const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension()
)(createStore)(reducer);

sagaMiddleware.run(rootSaga);

export default store;
