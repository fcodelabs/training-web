import { call, takeEvery,put } from "redux-saga/effects";
import {getCards,setCards,postCard} from "../slices/cardSlice";
import {getDocs,collection,addDoc } from "firebase/firestore";
import {db} from "../../db/firebase";

async function requestGetCards(){
    const querySnapshot = await getDocs(collection(db, "diarycards"));
    let cards = []
    querySnapshot.forEach((doc) => {
            cards.push(doc.data());
    })
    return cards;
}

async function postDiaryCard({name,title,description}){
    await addDoc(collection(db,"diarycards"),{
       name,title,description
    });
}

function* handlePostDiaryCard({payload}){
    try{
        yield call(postDiaryCard,payload);
        console.log("posted the document")
    }catch(err){
        console.log(err);
    }
}

function* handleGetCards(){
    try{
        const res = yield call(requestGetCards);
        yield put(setCards({res}));
    }catch(err){
        console.log(err);
    }
}

export function* rootSaga(){
    yield takeEvery(getCards.type,handleGetCards);
    yield takeEvery(postCard.type,handlePostDiaryCard);
}