import {createStore ,applyMiddleware,combineReducers} from "redux";
import rootSaga from "./Pages/DiaryHome/sagas";
import createSagaMiddleware from "@redux-saga/core";
import items from './Pages/DiaryHome/reducer'


const reducers = combineReducers({
    items:items,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducers,applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);


export default store;