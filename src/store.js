import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import diaryReducer from "./pages/DiaryHome/reducer";
import reducer from "./pages/LandingPage/reducer";
import nickNameSetSaga from "./pages/LandingPage/saga";
import { diaryPostSaga, saga } from "./pages/DiaryHome/saga";
import { spawn } from 'redux-saga/effects';

const reduxSaga = createSagaMiddleware()

const rootReducer = combineReducers({
    login: reducer,
    diary: diaryReducer,
})

const store = createStore(
    rootReducer,
    applyMiddleware(reduxSaga)
)

function* rootSaga() {
    yield spawn(reduxSaga)
    yield spawn(saga)
    yield spawn(nickNameSetSaga)
    yield spawn(diaryPostSaga)
}

reduxSaga.run(rootSaga)

export default store;