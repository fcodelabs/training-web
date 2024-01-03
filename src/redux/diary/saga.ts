import { take, call, put, takeEvery, all} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
    diaryCardActions
} from './slice';
import { db } from '../../config/firebaseConfig/firebaseConfig';
import { collection, addDoc, query, onSnapshot, where } from "firebase/firestore";
import { PayloadAction } from '@reduxjs/toolkit';


// props for DiaryCard component
interface IDiaryCardProps {
    title: string;
    description: string;
    username: string;
}

function snapshotChannel(db: any) {
    return eventChannel<IDiaryCardProps[]>((emitter) => {
        const ref = collection(db, "DiaryCards");

        const unsubscribe = onSnapshot(ref, (querySnapshot) => {
            const updatedDiaryCards: IDiaryCardProps[] = [];
            querySnapshot.forEach((doc) => {
                const entry = doc.data() as IDiaryCardProps;
                updatedDiaryCards.push(entry);
            });
            emitter(updatedDiaryCards);
        });

        return unsubscribe;
    });
}


// add a diary card to the database
function* addDiaryCard(action: PayloadAction<IDiaryCardProps>): Generator<any, any, any> {
    try {
        // console.log('Adding diary card', action.payload)
        const { title, description, username } = action.payload;
        const diaryCard: IDiaryCardProps = {
            title,
            description,
            username
        };
        yield call(addDoc, collection(db, "DiaryCards"), diaryCard);       // add the diary card to the database
    } catch (err) {
        console.error('Adding card error', err);
        alert(err);
    }
}

// fetch the diary card list from the database according to the username
function* fetchDiaryCardList(action: PayloadAction<string>): Generator<any, any, any> {
    try {
        const username = action.payload;
        const channel = yield call(snapshotChannel, db);         // create a channel to listen to changes in the database
        while (true) {
            const diaryCardList: IDiaryCardProps[] = yield take(channel);   // get the updated diary card list
            const filteredDiaryCardList = diaryCardList.filter(card => card.username === username);
            yield put(diaryCardActions.setDiaryCardList(filteredDiaryCardList)); // update the diary card list in the redux store
              
        }
    } catch (err) {
        console.error('Fetching diary card list error', err);
        alert(err);
    }
}


function* addDiaryCardSaga() {
    yield takeEvery(diaryCardActions.addDiaryCard, addDiaryCard);
    
}

function* fetchDiaryCardListSaga(): Generator<any, any, any> {
    yield takeEvery(diaryCardActions.fetchDiaryCardList.type, fetchDiaryCardList);
}

export default function* diaryCardSaga() {
    yield all([addDiaryCardSaga(), fetchDiaryCardListSaga()]);   // run the sagas in parallel
};