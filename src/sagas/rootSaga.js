import { takeLatest } from 'redux-saga/effects'
import { ActionTypes } from '../config/constants'
import {
  handleFirebasePostsCreate,
  handleFirebasePostsDelete,
  handleFirebasePostsSync
} from './diaryCardSaga'
import { handleRandomName } from './loginSaga'

export function * watchSaga () {
  yield takeLatest(ActionTypes.ADD_DIARY_CARD, handleFirebasePostsCreate)
  yield takeLatest(ActionTypes.START_FIRESTORE_DIARY_NOTES_SYNC,
    handleFirebasePostsSync)
  yield takeLatest(ActionTypes.REMOVE_DIARY_CARD, handleFirebasePostsDelete)
  yield takeLatest(ActionTypes.RANDOM_NAME, handleRandomName)
}
