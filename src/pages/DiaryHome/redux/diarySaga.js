import { DIARY_GET, DIARY_POST } from "./diaryActionsTypes"
import { diaryGet, successData } from './diaryAction'
import { takeEvery, call, put, takeLatest } from "@redux-saga/core/effects"

import firebase from "../../../utils/firebase";

const ref = firebase.firestore().collection("diary-notes")

function* callCardGet() {
    try {
        let items = []
        const data = yield ref.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                items.push(doc.data())
            })
            return items;
        })
        yield put(successData(data))
    } catch (e) {
        console.log(e.toString());
    }
}

function* postCardData(data) {

    try {
        yield ref.add({
            name: data.formData.name,
            title: data.formData.title,
            description: data.formData.description,
        })

        yield put(diaryGet());
    } catch (e) {
        console.log(e.toString());
    }
}

export function* diarySaga() {

    yield takeLatest(DIARY_GET, callCardGet)
}

export function* diaryPostSaga() {
    yield takeLatest(DIARY_POST, postCardData)
}