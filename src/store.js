import {createStore ,applyMiddleware} from "redux";
import rootSaga from "./sagas/sagas";
import createSagaMiddleware from "@redux-saga/core";
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducers,applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);


export default store;