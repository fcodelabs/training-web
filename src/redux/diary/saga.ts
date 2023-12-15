import { take, call, put, takeEvery, all} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
    diaryCardActions
} from './slice';
import { db } from '../../config/firebaseConfig';
import { collection, addDoc, query, onSnapshot, where } from "firebase/firestore";
import { PayloadAction } from '@reduxjs/toolkit';


// props for DiaryCard component
interface DiaryCardProps {
    title: string;
    description: string;
    username: string;
}

// create a channel to listen to changes in the database
function snapshotChannel(db: any, username: string) {
    // return an event channel that will subscribe to the database changes this will be used to real-time updates
    return eventChannel<DiaryCardProps[]>((emitter) => {
        const ref = collection(db, "DiaryCards");                      // reference to the collection "DiaryCards"
        const query1 = query(ref, where("username", "==", username));  // query to get the documents with the username

        // listen to the changes in the database
        const unsubscribe = onSnapshot(query1, (querySnapshot) => {
            const updatedDiaryCards: DiaryCardProps[] = [];            // array to store the updated diary cards
            querySnapshot.forEach((doc) => {
                const entry = doc.data() as DiaryCardProps;
                updatedDiaryCards.push(entry);                         // add the updated diary card to the array
            });
            emitter(updatedDiaryCards);
        });

        return unsubscribe;
    });
}

// add a diary card to the database
function* addDiaryCard(action: PayloadAction<DiaryCardProps>): Generator<any, any, any> {
    try {
        // console.log('Adding diary card', action.payload)
        const { title, description, username } = action.payload;
        const diaryCard: DiaryCardProps = {
            title,
            description,
            username
        };
        yield call(addDoc, collection(db, "DiaryCards"), diaryCard);       // add the diary card to the database
    } catch (err) {
        console.log('Adding card error', err);
        alert(err);
    }
}

// fetch the diary card list from the database according to the username
function* fetchDiaryCardList(action: PayloadAction<string>): Generator<any, any, any> {
    try {
        const username = action.payload;
        const channel = yield call(snapshotChannel, db, username);         // create a channel to listen to changes in the database
        while (true) {
            const diaryCardList: DiaryCardProps[] = yield take(channel);   // get the updated diary card list
            // console.log('Diary card list', diaryCardList);
            yield put(diaryCardActions.setDiaryCardList(diaryCardList));   // update the diary card list in the redux store
        }
    } catch (err) {
        console.log('Fetching diary card list error', err);
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