import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDzQ-Z3TRryhpgK8x9hKMuolQZAcjQNe-0",
    authDomain: "dear-diary-janith.firebaseapp.com",
    projectId: "dear-diary-janith",
    storageBucket: "dear-diary-janith.appspot.com",
    messagingSenderId: "108058144910",
    appId: "1:108058144910:web:1d200bbbe49bc4d34fd9df",
    measurementId: "G-LE4JTMMCG0"
};

firebase.initializeApp(firebaseConfig)

export default firebase;