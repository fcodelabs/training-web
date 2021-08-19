import reducer from '../Pages/DiaryHome/reducer'
import loginReducer from '../Pages/Login/reducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { loadingReducer } from '../Pages/App/reducer'

const rootReducer = combineReducers({
  diaryCards: reducer,
  login: loginReducer,
  loading: loadingReducer,
  firestore: firestoreReducer
})

export default rootReducer
