import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import diariesSaga from '../sagas/diariesSaga';
import diarySlice from './diary-slice';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    diary: diarySlice.reducer,
  },
  middleware: [sagaMiddleware],
});

//run the saga
sagaMiddleware.run(diariesSaga);

export default store;
