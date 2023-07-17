import { all } from 'redux-saga/effects';
import diarySaga from './diarySaga';

export default function* rootSaga() {
  yield all([
    diarySaga(),
  ]);
}

export { rootSaga };