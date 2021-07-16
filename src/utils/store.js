import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import notesReducer from '../Pages/Home/notes.reducer';
import { combineReducers } from 'redux';
import { takeEvery, takeLatest, } from "@redux-saga/core/effects";
import { addCard, getList } from "../Pages/Home/saga"



const rootReducer = combineReducers({
    notes: notesReducer,
})

function* rootSaga() {
    yield takeEvery('ADD_NOTE', addCard)
    yield takeLatest('GET_LISTS', getList)
}


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
