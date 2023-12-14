import { configureStore } from '@reduxjs/toolkit';
import diaryReducer from './diarySlice';
import createSagaMiddleware from 'redux-saga';
import { watchDiarySagas } from './Sagas/diarySagas';

const sagaMiddleware = createSagaMiddleware();
const middleware: any[] = [sagaMiddleware];

const store = configureStore({
  reducer: {
    diaries: diaryReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(watchDiarySagas);

export default store;
