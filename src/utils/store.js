import {createStore,applyMiddleware} from "redux"
import reducer from "../Pages/Reducers/diaryReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import {homePageSagas} from '../Pages/Saga/index'
import { all, fork } from "@redux-saga/core/effects";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))

function* rootSaga(){
    yield all(homePageSagas.map(s=>fork(s)))
}

sagaMiddleware.run(rootSaga);

export default store;