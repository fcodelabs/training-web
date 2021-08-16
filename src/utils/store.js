import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createFirestoreInstance } from 'redux-firestore'
import { composeWithDevTools } from 'redux-devtools-extension'
import { watchSaga } from './rootSaga'
import rootReducer from './rootReducer'
import { firebase, rrfConfig } from './firebase'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(watchSaga)

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

const firestore = firebase.firestore()

export { store, firestore }
