import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyB3p9Zw_-Y9pLyE_3FhvvzCXoLJpKGEU5s",
  authDomain: "dear-diary-pamuditha.firebaseapp.com",
  databaseURL: "https://dear-diary-pamuditha-default-rtdb.firebaseio.com",
  projectId: "dear-diary-pamuditha",
  storageBucket: "dear-diary-pamuditha.appspot.com",
  messagingSenderId: "470574443333",
  appId: "1:470574443333:web:33137519b5cbe55f11ec2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
