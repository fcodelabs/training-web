import { call, put, takeLatest } from 'redux-saga/effects';
import db from '../Utils/firebaseConfig';
import {collection} from "firebase/firestore";
import { addDoc} from "firebase/firestore";



function* addCardSaga(){
  yield takeLatest("ADD_CARD",(
    function*(action){
      try{
        yield call(addDoc(collection(db,"cards"),action.payload));
      }catch (e) { /* ignore */ }
      }
    

  ));

}


 export default addCardSaga;
