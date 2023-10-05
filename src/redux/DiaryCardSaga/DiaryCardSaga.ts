import { eventChannel } from "redux-saga";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { all, call, put, take, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { diaryCardActions }  from "../DiaryCardSlice/DiaryCardSlice";
import { db } from "../../firebase/config";

interface DiaryData {
  title: string;
  username: string;
  description: string;
}

function createSnapshotChannel(db: any) {
  return eventChannel<DiaryData[]>((emitter) => {
    const ref = collection(db, "diary");
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const updatedDiaryEntries: DiaryData[] = querySnapshot.docs.map(
        (doc) => doc.data() as DiaryData
      );
      emitter(updatedDiaryEntries);
    });
    return unsubscribe;
  });
}

function* fetchDiaryCardEntries(): Generator<any, any, any> {
  const channel = yield call(createSnapshotChannel, db);
  while (true) {
    const diaryCardEntries: DiaryData[] = yield take(channel);
    yield put(diaryCardActions.getDiaryCardEntries(diaryCardEntries));
  }
}

function* addDiaryCard(action: PayloadAction<DiaryData>) {
  try {
    const { title, username, description } = action.payload;
    const diaryCard: DiaryData = { title, username, description };
    yield call(addDoc, collection(db, "diary"), diaryCard);
  } catch (error) {
    console.error("Error adding diary card:", error);
  }
}

function* watchAddDiaryCard() {
  yield takeEvery(diaryCardActions.addDiaryCard, addDiaryCard);
}

function* watchFetchDiaryCardEntries() {
  yield takeEvery(
    diaryCardActions.fetchDiaryCardEntries,
    fetchDiaryCardEntries
  );
}

function* mySaga() {
  yield all([watchFetchDiaryCardEntries(), watchAddDiaryCard()]);
}

export default mySaga;
