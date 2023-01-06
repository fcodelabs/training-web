import { call, put, takeEvery } from 'redux-saga/effects';
import { addCard,addCardFailed,addCardSuccess } from './addCardSlice';
import {addDoc, collection} from "firebase/firestore";
import {db} from '../../utils/firebaseConfig';
import {Card} from "./card";
import {PayloadAction} from "@reduxjs/toolkit";

async function addCardFunc(card: Card):Promise<string>{
    console.log("in add card fucntion")
    const docRef = await addDoc(collection(db, "Cards"), {
        title: card.title,
        subtitle: card.subtitle,
        description: card.description,
        color: card.color,
        timestamp: Date.now()
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id
}


function* addCard1(action:PayloadAction<Card>) {
    try {
        const response: string = yield call(addCardFunc, action.payload);
        yield put(addCardSuccess(response));
    } catch (error) {
        console.log('Failed to add card', error);
        yield put(addCardFailed());
    }
}

export default function* addCardSaga() {
    yield takeEvery(addCard.type, addCard1);
}