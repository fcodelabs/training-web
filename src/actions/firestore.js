import { ActionTypes } from '../config/constants'

export const startDiaryNotesFirestoreSync = () => ({
  type: ActionTypes.START_FIRESTORE_DIARY_NOTES_SYNC,
  payload: {}
})
