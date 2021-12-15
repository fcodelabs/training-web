
import {createStore,compose} from 'redux';
import Reducer from './reducers/Reducer';

export const store = compose(window.devToolsExtension && window.devToolsExtension(),
)(createStore)(Reducer);
export default store;


import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.js';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
    