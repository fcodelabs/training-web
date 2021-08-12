import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware} from 'redux';
import rootSaga from "./sagas";
import createSagaMiddleware from '@redux-saga/core';
import './index.css';
import App from './App';
import reducers from "./reducers";
import logger from 'redux-logger';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
middleware.push(logger)
const store = createStore(reducers,applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}><App /></Provider>
,
  document.getElementById('root')
);
