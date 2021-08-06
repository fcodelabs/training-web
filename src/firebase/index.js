import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from "../config/firebase";
import store from "../redux/store";
import {createFirestoreInstance} from "redux-firestore";

firebase.initializeApp(firebaseConfig);
firebase.firestore()

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}

export default rrfProps