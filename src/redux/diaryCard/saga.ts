import { eventChannel } from "redux-saga";
import { collection, onSnapshot } from "@firebase/firestore";
import firebaseDB from "../../db/firebase";
import { all, call, put, take, takeEvery } from "redux-saga/effects";
import { addDoc } from "firebase/firestore";
import { PayloadAction } from "@reduxjs/toolkit";
import { diaryCardActions } from "./diaryCardSlice";

type DiaryData = {
  title: string;
  username: string;
  description: string;
};

function snapShotChannel(db: any) {
  return eventChannel<DiaryData[]>((emitter) => {
    const ref = collection(db, "diary");
    const unsubscribe = onSnapshot(ref, (querySnapshot) => {
      const updatedEntries: DiaryData[] = [];
      querySnapshot.forEach((doc) => {
        const entry = doc.data() as DiaryData;
        updatedEntries.push(entry);
      });
      emitter(updatedEntries);
    });
    return unsubscribe;
  });
}

function* fetchDiaryCardList(): Generator<any, any, any> {
  const channel = yield call(snapShotChannel, firebaseDB);
  while (true) {
    const diaryCardList: DiaryData[] = yield take(channel);
    yield put(diaryCardActions.setDiaryCardList(diaryCardList));
  }
}

function* addDiary(action: PayloadAction<DiaryData>): Generator<any, any, any> {
  try {
    const { title, username, description } = action.payload;
    const diaryCard: DiaryData = {
      title,
      username,
      description,
    };
    yield call(addDoc, collection(firebaseDB, "diary"), diaryCard);
  } catch (error) {
    alert(error);
  }
}

function* addDiaryCardSaga() {
  yield takeEvery(diaryCardActions.addDiaryCard, addDiary);
}

function* fetchDiaryCardListSaga(): Generator<any, any, any> {
  yield takeEvery(diaryCardActions.fetchDiaryCardList, fetchDiaryCardList);
}

export default function* diaryCardSaga() {
  yield all([fetchDiaryCardListSaga(), addDiaryCardSaga()]);
}
