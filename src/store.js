
import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from './Pages/DiaryHome/Reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Pages/DiaryHome/Saga/index';


const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
   //window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);


sagaMiddleware.run(rootSaga);

export default store;
    