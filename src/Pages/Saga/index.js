import { all } from 'redux-saga/effects'
import getCardSaga from './getCardSaga'


export default function* rootSaga() {
  yield all([
    getCardSaga(),
  ])
}