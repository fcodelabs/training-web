import { all, fork } from 'redux-saga/effects';
import userSaga from './user/userSaga'; 
import diaryCardSaga from './diarycard/diaryCardSaga';
import notificationSaga from './notification/notificationSaga';

function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(diaryCardSaga),
    fork(notificationSaga)]);
}

export default rootSaga;
