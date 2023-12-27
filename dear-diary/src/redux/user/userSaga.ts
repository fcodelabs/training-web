import { put, takeEvery } from 'redux-saga/effects';
import { userLoggedIn, setUserName } from './userSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { userLogged } from '../../utilities/validation';

function* actionUser(action: PayloadAction<string>) {
  const userName = action.payload;
  localStorage.setItem("userName", userName);
  try{

  const startTime = new Date();
  yield put(setUserName(userName));
  const endTime = new Date();
  userLogged(startTime, endTime);
  
}
  catch(e){
    console.log(e);
  }
  
}

function* userSaga() {
     yield takeEvery(userLoggedIn, actionUser);

}

export default userSaga;
