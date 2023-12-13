import { take, call, put, takeEvery, all} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
    diaryCardActions
} from './diarySlice';
import { db } from '../../utility/firebaseConfig';
import { collection, addDoc, query, onSnapshot, where } from "firebase/firestore";
import { PayloadAction } from '@reduxjs/toolkit';

interface DiaryCardProps {
    title: string;
    description: string;
    username: string;
}

function snapshotChannel(db: any, username: string) {
    return eventChannel<DiaryCardProps[]>((emitter) => {
        const ref = collection(db, "DiaryCards");
        const query1 = query(ref, where("username", "==", username));

        const unsubscribe = onSnapshot(query1, (querySnapshot) => {
            const updatedDiaryCards: DiaryCardProps[] = [];
            querySnapshot.forEach((doc) => {
                const entry = doc.data() as DiaryCardProps;
                updatedDiaryCards.push(entry);
            });
            emitter(updatedDiaryCards);
        });

        return unsubscribe;
    });
}


function* addDiaryCard(action: PayloadAction<DiaryCardProps>): Generator<any, any, any> {
    try {
        console.log('Adding diary card', action.payload)
        const { title, description, username } = action.payload;
        const diaryCard: DiaryCardProps = {
            title,
            description,
            username
        };
        yield call(addDoc, collection(db, "DiaryCards"), diaryCard);
    } catch (err) {
        console.log('Adding card error', err);
        alert(err);
    }
}

function* fetchDiaryCardList(action: PayloadAction<string>): Generator<any, any, any> {
    try {
        const username = action.payload;
        const channel = yield call(snapshotChannel, db, username);
        while (true) {
            const diaryCardList: DiaryCardProps[] = yield take(channel);
            console.log('Diary card list', diaryCardList);
            yield put(diaryCardActions.setDiaryCardList(diaryCardList));
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
    yield all([addDiaryCardSaga(), fetchDiaryCardListSaga()]);
};