
import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from './Pages/HomePage/Reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Pages/Saga/index';


const sagaMiddleware = createSagaMiddleware();

const store = compose(
  applyMiddleware(sagaMiddleware),
   //window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer);
// //export default store;
//const store=createStore(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
    