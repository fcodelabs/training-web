import { colRef } from "../services/firebase";
import { getDocs } from "firebase/firestore";
import { call, takeEvery, put } from "redux-saga/effects";
import { diaryActions } from "../redux/diarySlice";

function* getDiariesfetch() {
    let diaryEntries = [];
    yield call(() => {
        getDocs(colRef)
            .then((snapshots) => {
                snapshots.docs.forEach((doc) => {
                    diaryEntries.push({ ...doc.data(), id: doc.id });
                    console.log(doc.data());
                });
            })

            .catch((err) => {
                console.log("error when loading data: " + err);
            });
    });
    console.log(diaryEntries);

    yield put(diaryActions.addCard(diaryEntries));
}

const diariesSaga = [takeEvery(diaryActions.getDiaries, getDiariesfetch)];
export default diariesSaga;
