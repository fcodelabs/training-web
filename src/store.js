import { configureStore } from '@reduxjs/toolkit'
import DiaryHomeReducer from './pages/DiaryHome/DiaryHomeSlice'
import SignInPageReducer from './pages/SignInPage/SignInPageSlice'
import createSagaMiddleware from 'redux-saga'
//import logger from "redux-logger";
import DiaryHomeSaga from '../src/pages/DiaryHome/DiaryHomeSaga'
//import { Store } from '@mui/icons-material';

const sagaMiddleware = createSagaMiddleware()

const store= configureStore({
    reducer:{
        signInPage:SignInPageReducer,
        diaryHome:DiaryHomeReducer
    },
    middleware:[sagaMiddleware]
}) ;
sagaMiddleware.run(DiaryHomeSaga);
export default store;