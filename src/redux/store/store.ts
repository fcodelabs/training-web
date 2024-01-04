import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {thunk }from 'redux-thunk'; 
import cardReducer from '../reducers/cardReducer'; 
import userReducer from '../reducers/userReducer'; 
import rootSaga from '../saga/rootSaga'; 
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cards: cardReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk as any, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;