import { applyMiddleware, combineReducers, createStore } from "redux";
import submitDataReducer from "./components/DiaryCard/redux/SubmitDataReducer";
import createSagaMiddleware from "redux-saga";
import { spawn } from "redux-saga/effects";
import {
  getDiaryData,
  submitSaga,
} from "./components/DiaryCard/redux/SubmitDiarySaga";

const rootReducer = combineReducers({
  submitDataReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSaga() {
  yield spawn(submitSaga);
  yield spawn(getDiaryData);
}

sagaMiddleware.run(rootSaga);

export default store;
