import { takeEvery, call, put, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { db } from "../db/FirebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { diaryCardAction } from "./DiarySlice";
import { DiaryEntry } from "../type/DiaryEntry";

function handleGetDiaryEntries(db: any) {
  return eventChannel<DiaryEntry[]>((emitter) => {
    const ref = collection(db, "diary_entries");
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const updatedEntries: DiaryEntry[] = [];
      querySnapshot.forEach((doc) => {
        const entry = doc.data() as DiaryEntry;
        updatedEntries.push(entry);
      });
      emitter(updatedEntries);
    });
    return () => unsubscribe();
  });
}

function* handleAddDiaryEntry(action: { type: string; payload: DiaryEntry }) {
  try {
    console.log(action.payload);
    yield call(() => addDoc(collection(db, "diary_entries"), action.payload));
  } catch (error) {
    console.error("Error adding diary entry:", error);
  }
}

function* fetchDiaryCardList(): Generator<any, any, any> {
  const channel = yield call(handleGetDiaryEntries, db);
  while (true) {
    const diaryCardList: DiaryEntry[] = yield take(channel);
    yield put(diaryCardAction.getDiaryEntries(diaryCardList));
    console.log(diaryCardList);
  }
}

export function* diarySaga() {
  yield takeEvery(diaryCardAction.addDiaryEntry.type, handleAddDiaryEntry);
  yield takeEvery(diaryCardAction.fetchDiaryEntries.type, fetchDiaryCardList);
}
