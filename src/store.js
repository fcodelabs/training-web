import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import diaryReducer from "./pages/DiaryHome/redux/diaryReducer";
import loginReducer from "./pages/LandingPage/redux/loginReducer";
import loginSaga from "./pages/LandingPage/redux/loginSaga";
import { diaryPostSaga, diarySaga } from "./pages/DiaryHome/redux/diarySaga";
import { spawn } from 'redux-saga/effects';

const saga = createSagaMiddleware()

const rootReducer = combineReducers({
    login: loginReducer,
    diary: diaryReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(saga)
)

function* rootSaga() {
    yield spawn(loginSaga)
    yield spawn(diarySaga)
    yield spawn(diaryPostSaga)
}

saga.run(rootSaga)

export default store;