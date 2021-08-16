import diaryReducer from '../Pages/DiaryHome/diary.reducer'
import loginReducer from '../Pages/Login/login.reducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { loadingReducer } from '../Pages/App/app.reducer'

const rootReducer = combineReducers({
  diaryCards: diaryReducer,
  login: loginReducer,
  loading: loadingReducer,
  firestore: firestoreReducer
})

export default rootReducer
