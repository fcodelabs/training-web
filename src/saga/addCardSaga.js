import { call, put } from 'redux-saga/effects';
import db from '../Utils/firebaseConfig';
import {collection} from "firebase/firestore";
import store from '../store';
import { addDoc} from "firebase/firestore";
import {addCard} from '../actions/addCard';


function* addCardSaga(){
  //const card =yield put(addCard(card));
  const card ={
    title:'aaa',
    description:'aaavv'
  }
    const doc=yield call(addDoc(collection(db,"cards"),card));
   
    
// const data = yield take(channel)
// yield put(successAction(data))
  }

 
 export default addCardSaga;