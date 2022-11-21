import { call, put, take, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { db } from "../../utils/firebaseConfig";
import { setDiaryCards, getDiaryCards, addADiaryCard } from "./HomeSlice";
import { collection, onSnapshot, addDoc } from 'firebase/firestore';

function* getDiaryCardsFromFirebase() {
  const channel = eventChannel((emit) => onSnapshot(collection(db,"diaryCards"),emit))
  while(true){
    try{
      const data = yield take(channel);
      const diaryCards = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      yield put(setDiaryCards(diaryCards));
    } catch(err){
      console.log(err);
    }
  }
}

function* addDiaryCardToFirebase(diaryCard) {
  try {
    yield call(() => addDoc(collection(db,"diaryCards"),diaryCard.payload));
  } catch (err) {
    console.log(err);
  }
}

export default function* HomeSaga() {
  yield takeEvery(
    getDiaryCards.type,
    getDiaryCardsFromFirebase
  );
  yield takeEvery(
    addADiaryCard.type,
    addDiaryCardToFirebase
  );
}
