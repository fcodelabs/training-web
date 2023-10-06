import { takeEvery, call, put, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { db } from "../db/FirebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { diaryCardAction } from "./diarySlice";

interface IDiaryEntry {
  title: string;
  username: string;
  description: string;
}

function handleGetDiaryEntries(db: any) {
  return eventChannel<IDiaryEntry[]>((emitter) => {
    const ref = collection(db, "diary_entries");
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const updatedEntries: IDiaryEntry[] = [];
      querySnapshot.forEach((doc) => {
        const entry = doc.data() as IDiaryEntry;
        updatedEntries.push(entry);
      });
      emitter(updatedEntries);
    });
    return () => unsubscribe();
  });
}

function* handleAddDiaryEntry(action: { type: string; payload: IDiaryEntry }) {
  try {
    console.log(action.payload);
    yield call(() => addDoc(collection(db, "diary_entries"), action.payload));
  } catch (error) {
    console.error("Error adding diary entry:", error);
  }
}

function* fetchDiaryCardList(): Generator<any, any, any> {
  try {
    const channel = yield call(handleGetDiaryEntries, db);
    while (true) {
      const diaryCardList: IDiaryEntry[] = yield take(channel);
      yield put(diaryCardAction.getDiaryEntries(diaryCardList));
    }
  } catch (error) {
    console.error("Error fetching diary entries:", error);
  }
}

export function* diarySaga() {
  yield takeEvery(diaryCardAction.addDiaryEntry.type, handleAddDiaryEntry);
  yield takeEvery(diaryCardAction.fetchDiaryEntries.type, fetchDiaryCardList);
}
