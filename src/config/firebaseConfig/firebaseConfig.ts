import { initializeApp } from "firebase/app";
import { 
    getFirestore , collection , getDocs
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: "dear-diary-emailusername-6a3d7",
    storageBucket: "dear-diary-emailusername-6a3d7.appspot.com",
    messagingSenderId: "107317734441",
    appId: "1:107317734441:web:2b5d34185dce4a01564038"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init firestore services
const db = getFirestore();

// // collection ref
// const collecRef = collection(db, "Users");

// // get collection data
// const docs = getDocs(collecRef)
//     .then((snapshot) => {
//         console.log(snapshot.docs);
//     })


export {db};
