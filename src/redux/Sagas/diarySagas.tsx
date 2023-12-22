import { eventChannel } from 'redux-saga';
import { call, put, take, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { query, where, collection, addDoc, onSnapshot } from 'firebase/firestore';
import db from '../../utility/firebase';
import { addDiary, setDiaries, fetchDiaries } from '../diarySlice';

interface Diary {
    title: string;
    description: string;
  }

function* addDiarySaga(action: PayloadAction<Diary>) {
  const diariesCollection = collection(db, 'diaries');
  yield call(addDoc, diariesCollection, action.payload);
}

function* fetchDiariesSaga(): Generator<any, void, any> {
  const nickname = localStorage.getItem('nickname'); // get nickname from local storage
  const diariesCollection = collection(db, 'diaries');
  const q = query(diariesCollection, where("nickname", "==", nickname));

  const channel = eventChannel(emitter => {
    const unsubscribe = onSnapshot(q, snapshot => {
      emitter(snapshot.docs.map(doc => doc.data()));
    });

    return () => unsubscribe();
  });

  try {
    while (true) {
      const diariesArray = yield take(channel);
      yield put(setDiaries(diariesArray));
    }
  } finally {
    channel.close();
  }
}

export function* watchDiarySagas() {
  yield takeEvery(addDiary.type, addDiarySaga);
  yield takeEvery(fetchDiaries.type, fetchDiariesSaga); 
  yield call(fetchDiariesSaga);
}
