import { configureStore,applyMiddleware } from '@reduxjs/toolkit'
import DiaryHomeReducer from './pages/DiaryHome/DiaryHomeSlice'
import SignInPageReducer from './pages/SignInPage/SignInPageSlice'
import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger";
import rootSaga from './rootSaga'
import { Store } from '@mui/icons-material';

const sagaMiddleware = createSagaMiddleware()

const store= configureStore({
    reducer:{
        signInPage:SignInPageReducer,
        diaryHome:DiaryHomeReducer
    },
    middleware:[sagaMiddleware]
}) ;
sagaMiddleware.run(rootSaga);
export default store;