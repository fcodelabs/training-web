import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDPuPhXzbf2qMsodbcaUvRzdkuUIiJxN4I",
    authDomain: "dear-diary-binith.firebaseapp.com",
    projectId: "dear-diary-binith",
    storageBucket: "dear-diary-binith.appspot.com",
    messagingSenderId: "305941266434",
    appId: "1:305941266434:web:d6380fea9a75dad1aa671b"
  };

const app = initializeApp(firebaseConfig);

export default app;