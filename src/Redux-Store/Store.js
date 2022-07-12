import { applyMiddleware, combineReducers, createStore } from 'redux';
import todoReducer from './Reducer/TodoReducer'
import createSagaMiddleware from '@redux-saga/core';

import rootSaga from './Sagas/rootSaga';
import userReducer from './Reducer/UserReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

//Combined Reducer
const reducer = combineReducers({
    todos:todoReducer,
    auth: userReducer
   
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, composeWithDevTools( applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);
export default store;