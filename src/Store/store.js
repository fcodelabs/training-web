import { applyMiddleware, compose, createStore,combineReducers } from "redux";
import { takeEvery} from "@redux-saga/core/effects";
import createSagaMiddleware from "@redux-saga/core";
import reducerFunction from "../Pages/Home/cardReducer";
import { getCards, saveCard } from "../Pages/Home/homeSaga";

function* rootSaga() {
  yield takeEvery('addNew', saveCard);
  yield takeEvery('getCards', getCards)
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    crd: reducerFunction,
  })



const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;