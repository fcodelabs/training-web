import { take, call, put, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import db from "../../firebase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import {
  addDiaryCard,
  getAllDiaryCards,
  setAllDiaryCards,
} from "../../store/diaryCardSlice";

function* GetCards() {
  const channel = eventChannel((emit) =>
    onSnapshot(collection(db, "Post"), emit)
  );
  while (true) {
    try {
      const data = yield take(channel);
      const cards = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        created: doc.data().created.toDate().toString(),
      }));

      yield put(setAllDiaryCards(cards));
      console.log("got cards");

      console.log(cards);
    } catch (err) {
      console.error("socket error:", err);
    }
  }
//   const q = yield call(() => query(citiesRef, orderBy("created")));
//   const cards = []; 
//   onSnapshot(q,{querySnapShot})=>{
//     querySnapShot.forEach(doc => {
        
//     });
//   }
}

function* AddCard(action) {
  //   yield call(() => addDoc(doc(db, "Post"), action.payload));
  const ref = yield call(() => addDoc(collection(db, "Post"), action.payload));
  console.log("added ", ref.id);
}

export function* DiaryHomeSaga() {
  yield takeEvery(getAllDiaryCards.type, GetCards);
  yield takeEvery(addDiaryCard.type, AddCard);
}
