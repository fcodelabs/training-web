import { deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { call, put, takeEvery } from 'redux-saga/effects';
import colRef, { db, totalDiariesRef } from '../firebaseConfig';
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
        });
      })
      .catch((err) => {
        console.log(err);
      })
  );

  yield put(diaryActions.saveDiaries(diariesArray));
  yield put(diaryActions.saveTotalDiaries(totalDiaries));
}

function* deleteDiaries(action) {
  const { id, totalDiaries } = action.payload;

  yield call(() => {
    deleteDoc(doc(db, 'diaries', id));
    updateDoc(doc(db, 'totalDiaries', 'SEoX1XiXBAtlN8le3f3b'), {
      totalDiaries: parseInt(totalDiaries) - 1,
    });
  });
}

const diariesSaga = [
  takeEvery(diaryActions.removeDiary, deleteDiaries),
  takeEvery(diaryActions.getDiaries, workGetDiariesFetch),
];
export default diariesSaga;
