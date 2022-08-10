import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { dataActions } from "../slices/dataSlice";
import { collection, addDoc } from "firebase/firestore"; 
//import firestore from '../../firestore/firebase';
import {doc} from '../../firestore/firebase';
import {onSnapshot} from '@firebase/firestore';

function* addAllCards({payload}){
    //yield console.log(payload)
    yield addDoc(doc,{name:payload.name, title:payload.title, description:payload.description})  
}


function* allDataSaga() {
  yield takeEvery(dataActions.addCard, addAllCards);
    

}
  
export default allDataSaga;

