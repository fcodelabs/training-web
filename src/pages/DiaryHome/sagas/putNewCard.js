import {put, call} from 'redux-saga/effects';
import {setCard} from '../DiaryHomeSlice'
import { db } from "../../../firebaseConfig";
import { getDocs, collection, addDoc } from "firebase/firestore/lite";


console.log("put sagas")
const userCollectionRef = collection(db, "Users");
 async function putCard (payload) {
    await addDoc(userCollectionRef, {
        id:payload.id,
      name:payload.name,
      title: payload.title,
      description:payload.description,
    });
  };
export default function* putNewCard({payload}){
    try{
        console.log('payload')
        console.log(payload)
        yield call(putCard,payload)
    }catch(error){
        console.log(error)
    }
}