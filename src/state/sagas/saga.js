import { call, takeLatest,put } from "redux-saga/effects";
import {getCards,setCards} from "../slices/cardSlice";
import {getDocs,collection } from "firebase/firestore";
import {db} from "../../db/firebase";

async function requestGetCards(){
    const querySnapshot = await getDocs(collection(db, "diarycards"));
    let cards = []
    querySnapshot.forEach((doc) => {
            cards.push(doc.data());
    })
    return cards;
}

function* handleGetCards(){
    try{
        const res = yield call(requestGetCards)
        yield put(setCards({res}));
       
    }catch(err){
        console.log(err);
    }
}

export function* rootSaga(){
    yield takeLatest(getCards.type,handleGetCards);
}