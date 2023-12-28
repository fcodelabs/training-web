import { put, takeEvery } from 'redux-saga/effects';
import { userLoggedIn, setUserName } from './userSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* actionUser(action: PayloadAction<string>) {
  const userName = action.payload;
  localStorage.setItem("userName", userName);

  try {
    yield put(setUserName(userName));
  }
  catch (e) {
    console.log(e);
  }

}

function* userSaga() {
  yield takeEvery(userLoggedIn, actionUser);

}

export default userSaga;
