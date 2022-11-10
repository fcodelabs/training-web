// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClh-H48lvMQ2WJx03T-zGQiC3N_Xr4kNw",
  authDomain: "dear-diary-lahiru.firebaseapp.com",
  projectId: "dear-diary-lahiru",
  storageBucket: "dear-diary-lahiru.appspot.com",
  messagingSenderId: "461281283767",
  appId: "1:461281283767:web:9a24cacca5317ff7718732",
  measurementId: "G-TMQYRPNK1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}