import {createStore,applyMiddleware} from "redux"
import reducer from "../src/redux/Reducer"
import createSagaMiddleware from 'redux-saga'
import {homePageSagas} from './redux'
import { compose } from "redux"
import { all, fork } from "@redux-saga/core/effects";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,compose(applyMiddleware(sagaMiddleware)))

function* rootSaga(){
    yield all(homePageSagas.map(s=>fork(s)))
}

sagaMiddleware.run(rootSaga);

export default store;