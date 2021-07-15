import { take, put} from 'redux-saga/effects';
import firebase from '../config'
import { eventChannel } from 'redux-saga'
import {GET_CARDS}  from "./DiaryType"

export default function* watchForCards() {
    const ref=firebase.firestore().collection("cards")
    const channel = eventChannel((emit)=>ref.onSnapshot(emit))
    while (true){
        try{
            const data = yield take(channel);
            const result = data.docs.map(doc=>{
                return doc.data()
            })
            yield put({type:GET_CARDS,payload:result})
        }
        catch(err){
            console.error('socket error:', err)
        }
    } 
}