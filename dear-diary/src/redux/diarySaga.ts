import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { addDiaryEntry, fetchCards } from "./diarySlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '../config/firebase'
import { eventChannel } from "redux-saga";

interface DiaryEntry {
  title: string;
  username: string;
  description: string;
};

// Fetch diary entries and subscribe to real-time updates
function* fetchCardsSaga(): Generator<any, void, any> {
  try {
    const cardsCollectionRef = collection(db, 'cards');

    // Fetch initial data using getDocs
    const snapshot = yield call(getDocs, cardsCollectionRef);
    const entries: DiaryEntry[] = [];
    snapshot.forEach((doc: { data: () => DiaryEntry }) => {
      const entry = doc.data() as DiaryEntry;
      entries.push(entry);
    });
    yield put(addDiaryEntry(entries));

    // Channel to listen for real-time updates
    const channel = eventChannel((emit) => {
      const unsubscribe = onSnapshot(cardsCollectionRef, (querySnapshot) => {
        const updatedEntries: DiaryEntry[] = [];
        querySnapshot.forEach((doc) => {
          const entry = doc.data() as DiaryEntry;
          updatedEntries.push(entry);
        });
        // Emit the updated entries to the channel
        emit(updatedEntries);
      });

      return () => unsubscribe();
    });

    // Continuously listen for real-time updates and dispatch the addDiaryEntry action
    while (true) {
      const updatedEntries: DiaryEntry[] = yield take(channel);
      yield put(addDiaryEntry(updatedEntries));
    }

  } catch (error) {
    console.error('Error fetching diary entries: ', error);
  }
}

export default function* diarySaga() {
  yield takeEvery(fetchCards.type, fetchCardsSaga);
}