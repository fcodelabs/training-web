import { eventChannel } from 'redux-saga';
import { call, put, take, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { collection, addDoc, onSnapshot, query, where } from 'firebase/firestore';
import db from '../../utility/firebase';
import { addDiary, setDiaries, fetchDiaries } from '../diarySlice';

interface Diary {
    title: string;
    description: string;
    nickname: string;
  }

function* addDiarySaga(action: PayloadAction<Diary>) {
  const diariesCollection = collection(db, 'diaries');
  yield call(addDoc, diariesCollection, action.payload);
}
function* fetchDiariesSaga(action: PayloadAction<{ nickname: string }>): Generator<any, void, any> {
  const { nickname } = action.payload;
  const diariesCollection = collection(db, 'diaries');
  const q = query(diariesCollection, where("nickname", "==", nickname));

  const channel = eventChannel(emitter => {
    const unsubscribe = onSnapshot(q, snapshot => {
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
  yield takeEvery(fetchDiaries.type, fetchDiariesSaga);
}
