import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyClms_G8fsSoTuBZk2WTGmsdBalfV6dANE",
    authDomain: "dear-diary-udith.firebaseapp.com",
    projectId: "dear-diary-udith",
    storageBucket: "dear-diary-udith.appspot.com",
    messagingSenderId: "961875615429",
    appId: "1:961875615429:web:8745bffb8ff2ec0e601aac"
};

//firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);

const firebase = getFirestore(app)

export default firebase