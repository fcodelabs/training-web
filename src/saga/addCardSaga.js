import { call, put } from 'redux-saga/effects';
import db from '../Utils/firebaseConfig';
import {collection} from "firebase/firestore";
import store from '../store';
import { addDoc} from "firebase/firestore";
import {addCard} from '../actions/addCard';
import {useSelector} from 'react-redux';


function* addCardSaga(){
  const cards = useSelector(state=>state.cards.cards);
  //const card =yield put(addCard(card));
  // const card ={
  //   title:'aaa',
  //   description:'aaavv'
  // }
    const doc=yield call(addDoc(collection(db,"cards"),card));
   
  }

 
 export default addCardSaga;