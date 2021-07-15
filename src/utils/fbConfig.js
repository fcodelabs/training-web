import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBIRxQjZkExEICxTbvCKMMqAR00NOrXJpw",
    authDomain: "dear-diary-ashen99.firebaseapp.com",
    projectId: "dear-diary-ashen99",
    storageBucket: "dear-diary-ashen99.appspot.com",
    messagingSenderId: "118138687579",
    appId: "1:118138687579:web:2a7565cc25f69d9ada2f7e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const collection = firebase.firestore().collection("/notes")
export const db = firebase.firestore();
