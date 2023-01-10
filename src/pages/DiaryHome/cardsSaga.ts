import { call, put, take, cancelled } from 'redux-saga/effects';
import { fetchCardListSuccess, fetchCardListFailed } from './cardsSlice';
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from '../../utils/firebaseConfig';
import {Card} from "./card";
import {EventChannel, eventChannel} from "redux-saga";


function getCards(){
    return eventChannel(emitter => {
        const q = query(collection(db, "Cards"), orderBy("timestamp", "asc"));
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
            emitter(cardList)
        });
        return unsubscribe;
        }
    )
}

export default function* cardSaga() {
    const chan: EventChannel<Card[]> = yield call(getCards);
    try{
        while (true) {
            let cards: Card[] = yield take(chan)
            yield put(fetchCardListSuccess(cards));
        }
    }finally {
        let val: boolean = yield cancelled()
        if(val){
            chan.close()
        }
    }
}