import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD0LNOorJOvAS2bmj7hpBU0bDTELl-Lo-o",
  authDomain: "dear-diary-gathsara-6c829.firebaseapp.com",
  projectId: "dear-diary-gathsara-6c829",
  storageBucket: "dear-diary-gathsara-6c829.appspot.com",
  messagingSenderId: "473283918892",
  appId: "1:473283918892:web:2b85b2d1a251368bca2589",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
