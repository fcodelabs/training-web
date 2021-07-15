import { applyMiddleware, compose, createStore,combineReducers } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../Saga/Saga";
//import nameReducer from "./Reducers/UserReduceer";
import reducerFunction from "./Reducers/CardReducer";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    crd: reducerFunction,
  })



const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;