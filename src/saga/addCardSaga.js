import { call } from 'redux-saga/effects';
import db from '../Utils/firebaseConfig';
import {collection} from "firebase/firestore";
import store from '../store';
import { addDoc} from "firebase/firestore";

function* addCardSaga(card){
    const doc=yield call(addDoc(collection(db,"cards"),card));
    console.log('gg');
//    const doc = yield call(
//     rsf.firestore.addDocument,
//     'users',
//     {
//       firstName: 'Elon',
//       lastName: 'Musk'
//     }
//   );
    
    
  }

 
 export default addCardSaga;