import {put, call} from 'redux-saga/effects';
import {setCard} from '../DiaryHomeSlice'
import { ref, set, onValue } from "firebase/database";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, addDoc } from "firebase/firestore/lite";


console.log("fetch sagas")
const userCollectionRef = collection(db, "Users");
async function getPost(){
       const data = await getDocs(userCollectionRef);
      const tempCard=data.docs.map((docs) => ({ ...docs.data(), id: docs.id }));
    return tempCard;
    };
    
export default function* fetchCard () {
    try{
        const allCards=yield call(getPost)
        yield put(setCard(allCards))
    }catch(error){
       console.log("error")
    }
}
