import {createStore ,applyMiddleware} from "redux";
import rootSaga from "./utils/sagas/sagas";
import createSagaMiddleware from "@redux-saga/core";
import reducers from './utils/reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducers,applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);


export default store;