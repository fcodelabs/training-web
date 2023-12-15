import { all, fork } from 'redux-saga/effects';
import userSaga from './user/userSaga'; 
import diaryCardSaga from './diarycard/diaryCardSaga';

function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(diaryCardSaga)]);
}

export default rootSaga;
