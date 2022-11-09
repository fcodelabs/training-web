import { configureStore } from '@reduxjs/toolkit'
import diaryHomeReducer from './pages/DiaryHome/DiaryHomeSlice'
import signInReducer from './pages/SignInPage/SignInSlice'

export default configureStore({
  reducer: {
    signIn:signInReducer,
    diaryHome:diaryHomeReducer
  }
})