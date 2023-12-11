import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga'; 
import diaryCardSaga from './diaryCardSaga';

function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(diaryCardSaga)]);
}

export default rootSaga;
