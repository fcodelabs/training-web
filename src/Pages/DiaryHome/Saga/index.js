import { all } from 'redux-saga/effects'
import addCardSaga from './addCardSaga'
import getCardSaga from './getCardSaga'


export default function* rootSaga() {
  yield all([
    addCardSaga(),
    getCardSaga(),
  ])
   
    
}