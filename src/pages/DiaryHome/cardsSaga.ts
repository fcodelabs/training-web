import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCardList, fetchCardListSuccess, fetchCardListFailed } from './cardsSlice';
import {collection, Firestore, getDocs, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from '../../utils/firebaseConfig';
import {Card} from "./card";


async function getCards(): Promise<Card[]> {
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
            console.log("get cards executed")
            console.log(cardList)
            resolve(cardList)
        });
    })
}

function* fetchCardList1() {
    try {
        const response: Card[] = yield call(getCards);
        console.log("In fetch card list 1")
        yield put(fetchCardListSuccess(response));
    } catch (error) {
        console.log('Failed to fetch card list', error);
        yield put(fetchCardListFailed());
    }
}

export default function* cardSaga() {
    yield takeLatest(fetchCardList.type, fetchCardList1);
}