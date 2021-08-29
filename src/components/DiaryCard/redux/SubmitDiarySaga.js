import {put, takeLatest} from "redux-saga/effects";
import {GET_DIARY_DATA_BEGIN, SUBMIT_ACTION} from "./SubmitDataActionTypes";
import {getDiaryDataAction, loginActionFailure, submitDataSuccessAction} from "./SubmitDataAction";
import firebase from "../../../config/fbConfig";


function* getAllDiary() {
    let diaryData = []
    try {
        const allDiary = yield firebase.firestore().collection('gathsara-diary').get()
            .then((snapshot) => {
                snapshot.forEach((data) => {
                    diaryData.push(data.data())
                })
                return diaryData;
            })
        yield put(getDiaryDataAction([...allDiary]))
    } catch (e) {
        yield put(loginActionFailure(e));
    }
}

function* addDiaryData(title, description) {
    try {
        let myDiaryData = {...title, ...description};
        yield firebase.firestore().collection('gathsara-diary').add(myDiaryData);
        yield put(submitDataSuccessAction(myDiaryData))
    } catch (e) {
        yield put(loginActionFailure(e))
    }
}

export function* submitSaga() {
    yield takeLatest(SUBMIT_ACTION, addDiaryData);
}

export function* getDiaryData() {
    yield takeLatest(GET_DIARY_DATA_BEGIN, getAllDiary)
}
