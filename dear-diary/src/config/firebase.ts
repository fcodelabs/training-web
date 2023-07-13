// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCGUeJ-uPiiDpRXdMhr1bgwSX-Mqj9xPnc",
    authDomain: "deardiary-2c465.firebaseapp.com",
    projectId: "deardiary-2c465",
    storageBucket: "deardiary-2c465.appspot.com",
    messagingSenderId: "464384039498",
    appId: "1:464384039498:web:52bee90de50170806a64b3",
    measurementId: "G-C0SM8PG85Z"
  }

// init firebase app
const app = initializeApp(firebaseConfig)

// init services
export const db = getFirestore(app)

