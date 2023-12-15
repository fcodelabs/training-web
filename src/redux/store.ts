import {configureStore, Tuple
} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {diaryCardReducer} from './Diary/diarySlice';
import signInSliceReducer from './User/signInSlice';
import diaryCardSaga from './Diary/diarySaga';
import { useDispatch } from 'react-redux';


const sagaMiddleware: any = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    diaryCardList: diaryCardReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(diaryCardSaga);



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;