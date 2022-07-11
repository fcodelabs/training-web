import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHqv31Vi2iS-Z92bevcOgDNS_X_IrsDG8',
  authDomain: 'dear-diary-primesh.firebaseapp.com',
  projectId: 'dear-diary-primesh',
  storageBucket: 'dear-diary-primesh.appspot.com',
  messagingSenderId: '161142748630',
  appId: '1:161142748630:web:dde92f01a4c2edfe48a077',
};

// init firebase app
initializeApp(firebaseConfig);

//init service
export const db = getFirestore();

//collection ref
const colRef = collection(db, 'diaries');
export const totalDiariesRef = collection(db, 'totalDiaries');
export default colRef;
