import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { takeLatest, all, put, call } from "redux-saga/effects";
import db from "./firebase";
import * as actions from "./reducer";

async function addDiaryCard(card: any) {
  const diaryCards = collection(db, "diaryCards");
  try {
    await addDoc(diaryCards, card);
  } catch {
    console.log("Could not add diaryCard");
  }
}

function* addCard(card: any) {
  yield call(() => addDiaryCard(card));
  yield put({ type: "getCards" });
}

async function getDiaryCards() {
  const diaryCards = collection(db, "diaryCards");
  try {
    const cards = await getDocs(query(diaryCards, orderBy("payload.created")));
    const cardArray = cards.docs.map((doc) => doc.data());
    return cardArray;
  } catch {
    console.log("Could not fetch diaryCards");
    return [];
  }
}

function* workgetCards(): any {
  const response = yield call(getDiaryCards);
  const diaryCardsArray = response.map((card: any) => card.payload);
  yield put(actions.addCards({ payload: diaryCardsArray }));
}

function* addCardSaga() {
  yield takeLatest("addCard", addCard);
}

function* getCardsSaga() {
  yield takeLatest("getCards", workgetCards);
}

function* rootSaga() {
  yield all([addCardSaga(), getCardsSaga()]);
}

export default rootSaga;
