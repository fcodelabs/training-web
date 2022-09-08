import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga"
import userReducer from "./slices/userSlice"
import cardReducer from "./slices/cardSlice"
import { rootSaga } from './sagas/saga'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user:userReducer,
    cards:cardReducer,
  },
  middleware:(getDefaultMiddleware)=>[...getDefaultMiddleware(),sagaMiddleware]
})

sagaMiddleware.run(rootSaga);