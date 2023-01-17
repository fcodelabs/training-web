import { call, put, takeEvery } from 'redux-saga/effects';
import { addCard,addCardFailed,addCardSuccess } from './addCardSlice';
import {addDoc, collection} from "firebase/firestore";
import {db} from '../../utils/firebaseConfig';
import {Card} from "./card";
import {PayloadAction} from "@reduxjs/toolkit";

async function addCardFunc(card: Card):Promise<string>{
    const docRef = await addDoc(collection(db, "Cards"), {
        title: card.title,
        subtitle: card.subtitle,
        description: card.description,
        color: card.color,
        timestamp: Date.now()
    });
    return docRef.id
}


function* addCard1(action:PayloadAction<Card>) {
    try {
        const response: string = yield call(addCardFunc, action.payload);
        yield put(addCardSuccess(response));
    } catch (error) {
        yield put(addCardFailed());
    }
}

export default function* addCardSaga() {
    yield takeEvery(addCard.type, addCard1);
}