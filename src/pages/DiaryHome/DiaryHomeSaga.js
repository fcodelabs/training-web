import { take, call, put, takeEvery } from "redux-saga/effects";
import { DiaryHomeActions } from "./DiaryHomeSlice";
import { eventChannel } from "redux-saga";
import { db } from "../../firebaseConfig";
import {collection,addDoc,onSnapshot, orderBy, query} from "firebase/firestore";


export default function* DiaryHomeSaga() {
    yield takeEvery(DiaryHomeActions.addNewCard, putNewCard);
    yield takeEvery(DiaryHomeActions.fetchAllCard, fetchCard);
  }

  
//fetch all cards=============================
function* fetchCard() {
    const dataSet=query(collection(db, "Users"),orderBy('time'))
  const channel = eventChannel((emit) =>
    onSnapshot(dataSet, emit)
  );
  while (true) {
    try {
      const data = yield take(channel);
      const cards = data.docs.map((doc) => ({id: doc.id,...doc.data(),}));
      yield put(DiaryHomeActions.setCard(cards));
    } catch (err) {
      console.error("error:", err);
    }
  }
}

//.orderByChild('timestamp')
//add new card=============================
const userCollectionRef = collection(db, "Users");

function* putNewCard(payload) {
  try {
    yield call(putCard, payload);
  } catch (error) {
    console.log(error);
  }
}
async function putCard({payload}) {
  await addDoc(userCollectionRef, {
    time: payload.time,
    name: payload.name,
    title: payload.title,
    description: payload.description,
  });
}


