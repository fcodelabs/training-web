import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const firebaseConfig = () => {
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
  const db = getFirestore();

  //collection ref
  const colRef = collection(db, 'diaries');

  //get collection data
  getDocs(colRef)
    .then((snapshots) => {
      let diaries = [];
      snapshots.docs.forEach((doc) => {
        diaries.push({ ...doc.data(), id: doc.id });
      });
      console.log(diaries);
    })
    .catch((err) => {
      console.log(err);
    });
};
