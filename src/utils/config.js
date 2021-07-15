import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFcUCkdwS1mGMxK9LG4zlt5BgIEExYd9U",
  authDomain: "dear-diary-dinaliindeewari.firebaseapp.com",
  projectId: "dear-diary-dinaliindeewari",
  storageBucket: "dear-diary-dinaliindeewari.appspot.com",
  messagingSenderId: "549545081202",
  appId: "1:549545081202:web:ac8bd323bf755adeb185eb",
  measurementId: "G-L8N4L61805"
};
const fb = firebase.initializeApp(firebaseConfig);

export default fb