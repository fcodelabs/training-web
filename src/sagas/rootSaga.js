import {takeLatest} from 'redux-saga/effects'
import {ActionTypes} from "../constants";
import {handleFetchPosts} from "./diaryCardSaga";

export function* watchSaga(){
    yield takeLatest(ActionTypes.REQUEST_ALL_CARDS, handleFetchPosts)
}