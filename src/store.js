import { configureStore } from '@reduxjs/toolkit'
import DiaryHomeReducer from '../src/pages/DiaryHome/DiaryHomeReducer'
import SignInPageReducer from '../src/pages/SignInPage/SignInPageReducer'
import DiaryCardReducer from '../src/components/DiaryCard/DiaryCardReducer'
export default configureStore({
    reducer:{
        signInPage:SignInPageReducer,
        diaryHome:DiaryHomeReducer,
        DiaryCard:DiaryCardReducer
    }
})