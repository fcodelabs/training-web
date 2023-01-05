// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, Firestore} from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1y8saMii9OUglxEMCj3ceusyE-3adPtY",
    authDomain: "dear-diary-jananga.firebaseapp.com",
    projectId: "dear-diary-jananga",
    storageBucket: "dear-diary-jananga.appspot.com",
    messagingSenderId: "646950819087",
    appId: "1:646950819087:web:4bdd52ecc83ea382285a7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

