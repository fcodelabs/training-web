import { call, put, takeLatest } from "redux-saga/effects";
import { firebase } from "../firebase";
import { addDiaryCard, addAllDiaryCards } from "../slices/diaryCardSlice";
import { sagaActions } from "./sagaActions";


function* getDiaryCardsFromFirebase() {
  const db = firebase.firestore();
  const data = yield call(() => db.collection("diary").get());
  const diaryCards = data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(diaryCards);
  yield put(addAllDiaryCards(diaryCards));
}

function* addDiaryCardToFirebase(diaryCard) {
  const db = firebase.firestore();
  yield call(() => db.collection("diary").add(diaryCard));
  yield put(addDiaryCard(diaryCard));
}

export default function* saga() {
  yield takeLatest(
    sagaActions.GET_DIARY_CARDS_FROM_FIREBASE,
    getDiaryCardsFromFirebase
  );
  yield takeLatest(
    sagaActions.ADD_DIARY_CARD_TO_FIREBASE,
    addDiaryCardToFirebase
  );
}
