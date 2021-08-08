import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import { watchSaga } from '../sagas/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createFirestoreInstance } from 'redux-firestore'
import { firebase, rrfConfig } from './firebase'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

export const store = createStore(
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

export const firestore = firebase.firestore()
