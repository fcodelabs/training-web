import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBiwWSCcLhdaWU72mbQVgP0GOoyfVMkpIs',
  authDomain: 'dear-diary-salitha.firebaseapp.com',
  projectId: 'dear-diary-salitha',
  storageBucket: 'dear-diary-salitha.appspot.com',
  messagingSenderId: '344250169372',
  appId: '1:344250169372:web:354c488f1dce85e0d907d9',
  measurementId: 'G-E5585KB4EV'
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

export { rrfConfig, firebase }
