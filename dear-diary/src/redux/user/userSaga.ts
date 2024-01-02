import { put, takeEvery } from 'redux-saga/effects';
import { userLoggedIn, setUser } from './userSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* actionUser(action: PayloadAction<string>) {
  const userName = action.payload;
  yield put(setUser(userName));
}

function* userSaga() {
  yield takeEvery(userLoggedIn, actionUser);
}

export default userSaga;
