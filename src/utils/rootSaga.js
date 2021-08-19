import { takeLatest } from 'redux-saga/effects'
import { ActionTypes } from './actionTypes'
import {
  handleFirebasePostsCreate,
  handleFirebasePostsDelete,
  handleFirebasePostsSync
} from '../Pages/DiaryHome/sagas'
import { handleRandomName } from '../Pages/Login/sagas'

export function * watchSaga () {
  yield takeLatest(ActionTypes.ADD_DIARY_CARD, handleFirebasePostsCreate)
  yield takeLatest(ActionTypes.START_FIRESTORE_DIARY_NOTES_SYNC,
    handleFirebasePostsSync)
  yield takeLatest(ActionTypes.REMOVE_DIARY_CARD, handleFirebasePostsDelete)
  yield takeLatest(ActionTypes.RANDOM_NAME, handleRandomName)
}
