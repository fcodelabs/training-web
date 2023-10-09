import { eventChannel } from "redux-saga";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { all, call, put, take, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { diaryCardActions }  from "../diaryCardSlice/diaryCardSlice";
import { db } from "../../firebase/config";

interface IDiaryData {
  title: string;
  username: string;
  description: string;
}

function createSnapshotChannel(db: any) {
  return eventChannel<IDiaryData[]>((emitter) => {
    const ref = collection(db, "diary");
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const updatedDiaryEntries: IDiaryData[] = querySnapshot.docs.map(
        (doc) => doc.data() as IDiaryData
      );
      emitter(updatedDiaryEntries);
    });
    return unsubscribe;
  });
}

function* fetchDiaryCardEntries(): Generator<any, any, any> {
  const channel = yield call(createSnapshotChannel, db);
  while (true) {
    const diaryCardEntries: IDiaryData[] = yield take(channel);
    yield put(diaryCardActions.getDiaryCardEntries(diaryCardEntries));
  }
}

function* addDiaryCard(action: PayloadAction<IDiaryData>) {
  try {
    const { title, username, description } = action.payload;
    const diaryCard: IDiaryData = { title, username, description };
    yield call(addDoc, collection(db, "diary"), diaryCard);
  } catch (error) {
    console.error("Error adding diary card:", error);
  }
}

function* watchAddDiaryCardAndFetchDiaryCardEntries() {
  yield takeEvery(diaryCardActions.addDiaryCard, addDiaryCard);
  yield takeEvery(
    diaryCardActions.fetchDiaryCardEntries,
    fetchDiaryCardEntries
  );
}

function* mySaga() {
  yield all([watchAddDiaryCardAndFetchDiaryCardEntries()]);
}

export default mySaga;
