import { put, takeEvery } from 'redux-saga/effects';
import { userLoggedIn, setUserName } from '../slices/userSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* actionUser(action: PayloadAction<string>) {
  const userName = action.payload;
  localStorage.setItem("userName", userName);
  yield put(setUserName(userName));
  
}

function* userSaga() {
     yield takeEvery(userLoggedIn, actionUser);

}

export default userSaga;
