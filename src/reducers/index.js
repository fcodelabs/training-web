import diaryCardReducer from './diaryCard'
import loginReducer from './login'
import { combineReducers } from 'redux'
import { loadingReducer } from './global'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  diaryCards: diaryCardReducer,
  login: loginReducer,
  loading: loadingReducer,
  firestore: firestoreReducer
})

export default rootReducer
