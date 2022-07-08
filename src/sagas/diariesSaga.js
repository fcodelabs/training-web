import { getDocs } from 'firebase/firestore';
import { call, put, takeEvery } from 'redux-saga/effects';
import colRef from '../firebaseConfig';
import { totalDiariesRef } from '../firebaseConfig';
import { diaryActions } from '../store/diary-slice';

function* workGetDiariesFetch() {
  let diariesArray = [];
  let totalDiaries;

  yield call(
    () =>
      getDocs(colRef)
        .then((snapshots) => {
          snapshots.docs.forEach((doc) => {
            diariesArray.push({ ...doc.data(), id: doc.id });
          });
        })
        .catch((err) => {
          console.log(err);
        }),

    getDocs(totalDiariesRef)
      .then((snapshots) => {
        snapshots.docs.forEach((doc) => {
          totalDiaries = doc.data().totalDiaries;
          console.log(totalDiaries);
        });
      })
      .catch((err) => {
        console.log(err);
      })
  );

  yield put(diaryActions.saveDiaries(diariesArray));
  yield put(diaryActions.saveTotalDiaries(totalDiaries));
}

export default function* diariesSaga() {
  yield takeEvery(diaryActions.getDiaries, workGetDiariesFetch);
}
