import {createStore,applyMiddleware} from "redux"
import reducer from "../src/redux/Reducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import {homePageSagas} from '../src/component/DiaryHome'
import { all, fork } from "@redux-saga/core/effects";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))

function* rootSaga(){
    yield all(homePageSagas.map(s=>fork(s)))
}

sagaMiddleware.run(rootSaga);

export default store;