import { call, takeLatest } from 'redux-saga/effects';
import db from '../../../Utils/firebaseConfig';
import {collection} from "firebase/firestore";
import { addDoc} from "firebase/firestore";



function* getAddCard(action){
  yield call(addDoc(collection(db,"cards"),action.payload));
}

function* addCardSaga(){
  yield takeLatest("ADD_CARD",getAddCard);

}


 export default addCardSaga;