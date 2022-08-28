import { takeLatest, all, put, call } from "redux-saga/effects";
import { addDiaryCard, getDiaryCards } from "./actions";

function* addCardSaga() {
  yield takeLatest("addCard", addDiaryCard);
}

function* workgetCards() {
  const response = yield call(getDiaryCards);
  const diaryCardsArray = response.map((card) => card.payload);
  yield put({ type: "addCards", payload: diaryCardsArray });
}

function* getCardsSaga() {
  yield takeLatest("getCards", workgetCards);
}

function* rootSaga() {
  yield all([addCardSaga(), getCardsSaga()]);
}

export default rootSaga;
