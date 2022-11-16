import { take, call, put, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import db from "../../firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import {
  addDiaryCard,
  getAllDiaryCards,
  setAllDiaryCards,
} from "./DiaryHomeSlice";


function* GetCards() {
    const channel = eventChannel((emit) =>
      onSnapshot(query(collection(db, "Post"), orderBy("created")), emit)
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
        
      } catch (err) {
        console.error("socket error:", err);
      }
    }
}

function* AddCard(action) {
  const ref = yield call(() => addDoc(collection(db, "Post"), action.payload));
  console.log("added ", ref.id);
}

export function* DiaryHomeSaga() {
  yield takeEvery(getAllDiaryCards.type, GetCards);
  yield takeEvery(addDiaryCard.type, AddCard);
}
