import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchCardList, fetchCardListSuccess, fetchCardListFailed } from './cardsSlice';
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from '../../utils/firebaseConfig';
import {Card} from "./card";


function getCards(): Promise<Card[]> {
    const q = query(collection(db, "Cards"), orderBy("timestamp", "asc"));
    return new Promise((resolve, reject)=>{
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let cardList: Card[] = []
            querySnapshot.forEach((doc) => {
                cardList.push({
                    title: doc.data().title,
                    subtitle: doc.data().name,
                    description: doc.data().description,
                    color: doc.data().color
                })
            });
            resolve(cardList)
        });
    })
}


function* fetchCardList1() {
    try {
        const response: Card[] = yield call(getCards);
         yield put(fetchCardListSuccess(response));
    } catch (error) {
        console.log('Failed to fetch card list', error);
        yield put(fetchCardListFailed());
    }
}

export default function* cardSaga() {
    yield takeEvery(fetchCardList.type, fetchCardList1);
}