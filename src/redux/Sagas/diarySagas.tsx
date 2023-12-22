import { eventChannel } from 'redux-saga';
import { call, put, take, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import db from '../../utility/firebase';
import { addDiary, setDiaries } from '../diarySlice';

interface Diary {
    title: string;
    description: string;
  }

function* addDiarySaga(action: PayloadAction<Diary>) {
  const diariesCollection = collection(db, 'diaries');
  yield call(addDoc, diariesCollection, action.payload);
}

function* fetchDiariesSaga(): Generator<any, void, any> {
  const diariesCollection = collection(db, 'diaries');

  const channel = eventChannel(emitter => {
    const unsubscribe = onSnapshot(diariesCollection, snapshot => {
      emitter(snapshot.docs.map(doc => doc.data()));
    });

    return () => unsubscribe();
  });

  while (true) {
    const diariesArray = yield take(channel);
    yield put(setDiaries(diariesArray));
  }
}

export function* watchDiarySagas() {
  yield takeEvery(addDiary.type, addDiarySaga);
  yield call(fetchDiariesSaga);
}
