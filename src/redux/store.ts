import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from './rootStore';

const sagaMiddleware = createSagaMiddleware();

//configure store
const store = configureStore({
  reducer: rootReducer,
  middleware:[sagaMiddleware]
});

// Run the rootSaga
sagaMiddleware.run(rootSaga);

export default store;