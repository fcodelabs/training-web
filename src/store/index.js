import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import diariesSaga from '../sagas/diariesSaga';
import diarySlice from './diary-slice';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([...diariesSaga]);
}

const store = configureStore({
  reducer: {
    diary: diarySlice.reducer,
  },
  middleware: [sagaMiddleware],
});

//run the saga
sagaMiddleware.run(rootSaga);

export default store;
