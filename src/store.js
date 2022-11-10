import { configureStore } from '@reduxjs/toolkit'
import DiaryHomeReducer from './pages/DiaryHome/DiaryHomeSlice'
import SignInPageReducer from './pages/SignInPage/SignInPageSlice'
export default configureStore({
    reducer:{
        signInPage:SignInPageReducer,
        diaryHome:DiaryHomeReducer
    }
}) 