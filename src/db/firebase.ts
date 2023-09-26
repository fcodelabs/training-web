import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnGdGyZoBOhLqXqjDQXnLnTmj1Q8ceXQU",
  authDomain: "dear-diary-sandun.firebaseapp.com",
  databaseURL: "https://dear-diary-sandun-default-rtdb.firebaseio.com",
  projectId: "dear-diary-sandun",
  storageBucket: "dear-diary-sandun.appspot.com",
  messagingSenderId: "901602647027",
  appId: "1:901602647027:web:bdb51a715b6265db3f5086",
};

export default getFirestore(initializeApp(firebaseConfig));
