import { fork } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
import cardSaga from "./pages/DiaryHome/cardsSaga";
export default function* rootSaga() {
    yield all([cardSaga()])
}