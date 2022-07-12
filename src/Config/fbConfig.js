import { initializeApp } from 'firebase/app'
import {collection, getFirestore, getDocs} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAT-WzSRDAiThQZFFSErVFc3j4A2c_QXwg",
    authDomain: "dear-diary-hasindu-828ff.firebaseapp.com",
    projectId: "dear-diary-hasindu-828ff",
    storageBucket: "dear-diary-hasindu-828ff.appspot.com",
    messagingSenderId: "414519326291",
    appId: "1:414519326291:web:04fb56fb6e5a55ffa378a6",
    measurementId: "G-WSN93J55JR"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//reference of firestore database
export const firestoreDB = getFirestore();
//reference of collection 
const  collectionRef = collection(firestoreDB, 'Todos');
export default collectionRef;
