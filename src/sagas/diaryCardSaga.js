import { put, take } from 'redux-saga/effects'
import { loadAllDiaryCards } from '../actions/diaryCard'
import { firestore } from '../Utils/store'
import { eventChannel } from 'redux-saga'
import { endLoading, startLoading } from '../actions/global'

/**
 * Creates event listner for DiraryNote collection on firebase. Emits data on each update
 * @returns unsubscribe object
 */
function createDiaryNotesChannel () {
  return eventChannel(
    emit => {
      return firestore.collection('DiaryNotes')
        .where('name', '!=', '')
        .onSnapshot(querySnapshot => {
          const allDocs = []
          querySnapshot.docs.forEach(doc => {
            const cardData = doc.data()
            const diaryCard = {
              id: doc.id,
              name: cardData.name,
              description: cardData.description,
              title: cardData.title
            }
            allDocs.push(diaryCard)
          })
          emit(allDocs)
        })
    }
  )
}

/**
 * Handler saga for firebase sync. Watches the
 * @param action
 */
export function * handleFirebasePostsSync (action) {
  try {
    const diaryNotesChannel = createDiaryNotesChannel()
    while (true) {
      const diaryCards = yield take(diaryNotesChannel)
      yield put(loadAllDiaryCards(diaryCards))
    }
  } catch (err) {
    console.log('Error in saga!:', err)
  }
}

export function * handleFirebasePostsDelete (action) {
  try {
    yield put(startLoading())
    if (action.payload.id) { yield firestore.collection('DiaryNotes').doc(action.payload.id).delete() }
    yield put(endLoading())
  } catch (err) {
    console.log('Error in saga!:', err)
  }
}

export function * handleFirebasePostsCreate (action) {
  try {
    yield put(startLoading())
    yield firestore.collection('DiaryNotes').add(action.payload)
    yield put(endLoading())
  } catch (err) {
    console.log('Error in saga!:', err)
  }
}
