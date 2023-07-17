import { call, put, takeLatest } from "redux-saga/effects";
import { setDiaryEntries, setError, setSubmitted } from "./diarySlice";
import { Action, PayloadAction } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../config/firebase'

interface DiaryEntry {
  title: string;
  username: string;
  description: string;
};

function* submitDiaryEntry(action: PayloadAction<DiaryEntry>) {
  try {
    // Save card entries to Firestore
    const { title, username, description } = action.payload;
    const newDiaryEntry: DiaryEntry = {
      title,
      username,
      description,
    };
    const cardsCollectionRef = collection(db, 'cards');
    yield call(addDoc, cardsCollectionRef, newDiaryEntry);

  } catch (error) {
    console.error('Error adding document: ', error);
  }
}


function* watchSubmitDiaryEntry() {
  yield takeLatest("diary/submitDiaryEntry", submitDiaryEntry);
}

export default function* diarySaga() {
  yield watchSubmitDiaryEntry();
}
