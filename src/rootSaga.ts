
import { all } from 'redux-saga/effects';
import cardSaga from "./pages/DiaryHome/cardsSaga";
import addCardSaga from "./pages/DiaryHome/addCardSaga";
export default function* rootSaga() {
    yield all([cardSaga(), addCardSaga()])
}