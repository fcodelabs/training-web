import { takeEvery, put } from 'redux-saga/effects';
import { setCurrentUsername } from '../reducers/userReducer';

export const captureUsername = (username: string) => ({
  type: 'user/captureUsername',
  payload: username,
});

function* captureUsernameSaga(action: any): Generator<any, void, any> {
  try {
    const { payload } = action;
    
    if (payload.length > 0) {
      yield put(setCurrentUsername(payload));
      localStorage.setItem('username', payload);
    }
  } catch (error) {
    console.error('Error capturing username:', error);
  }
}

export function* userSaga() {
  yield takeEvery('user/captureUsername', captureUsernameSaga);
}