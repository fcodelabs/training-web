// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ9n-Y4RWwf4_bQ0Pe6zRzwuSeVTQWDcg",
  authDomain: "deardiary-60fed.firebaseapp.com",
  projectId: "deardiary-60fed",
  storageBucket: "deardiary-60fed.appspot.com",
  messagingSenderId: "774687202053",
  appId: "1:774687202053:web:a7ab7147e63e600adbf56c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
