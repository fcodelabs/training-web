import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from '../config/firebase'

firebase.initializeApp(firebaseConfig)
firebase.firestore()

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

export { rrfConfig, firebase }
