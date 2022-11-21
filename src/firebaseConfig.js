
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
//import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyClh-H48lvMQ2WJx03T-zGQiC3N_Xr4kNw",
  authDomain: "dear-diary-lahiru.firebaseapp.com",
  //  databaseURL: "https://dear-diary-lahiru-default-rtdb.firebaseio.com/",
  projectId: "dear-diary-lahiru",
  storageBucket: "dear-diary-lahiru.appspot.com",
  messagingSenderId: "461281283767",
  appId: "1:461281283767:web:9a24cacca5317ff7718732",
  measurementId: "G-TMQYRPNK1P",

  // apiKey: "AIzaSyAvU6jCAOulyJY6GdUBFkSochN1J6MQOQc",
  // authDomain: "diary-card-lahiru.firebaseapp.com",
  // projectId: "diary-card-lahiru",
  // storageBucket: "diary-card-lahiru.appspot.com",
  // messagingSenderId: "249628443459",
  // appId: "1:249628443459:web:eb0ac6cafc64e0447da5f6",
  // measurementId: "G-SVSC18B38M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
