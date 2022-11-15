import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import diaryHomeReducer from './pages/DiaryHome/DiaryHomeSlice'
import signInReducer from './pages/SignInPage/SignInSlice'
import {DiaryHomeSaga} from './pages/DiaryHome/DiaryHomeSaga'

const sagaMiddleware=createSagaMiddleware();

const middleware=[sagaMiddleware]

const store= configureStore({
  reducer: {
    signIn:signInReducer,
    diaryHome:diaryHomeReducer
  },
  middleware:middleware

})

sagaMiddleware.run(DiaryHomeSaga);

export default store;