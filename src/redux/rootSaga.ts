import { all } from 'redux-saga/effects';
import {addCardSaga, fetchCardSaga} from './saga';

//set sagas
export default function* rootSaga() {
  yield all([
    addCardSaga(),
    fetchCardSaga()
  ]);
}