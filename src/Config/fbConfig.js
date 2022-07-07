import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD8ykt2zTiZ0YhjGXOSYk16Rlze9EDn0g8",
    authDomain: "dear-diary-hasindu.firebaseapp.com",
    projectId: "dear-diary-hasindu",
    storageBucket: "dear-diary-hasindu.appspot.com",
    messagingSenderId: "8022747190",
    appId: "1:8022747190:web:546001523d178d953c9097",
    measurementId: "G-H5PEDR6LNL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
const storage = firebase.storage();

export { storage, firebase as default };