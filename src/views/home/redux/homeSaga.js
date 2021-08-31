import {put, takeLatest} from "redux-saga/effects";
import {FETCH_DATA_CALLER, SUBMIT_CARD} from "./homeActionType";
import {fetchData, fetchDataCaller, setLoading, submitFailure,} from "./homeAction";
import firebase from "../../../util/firebase";

const ref = firebase.firestore().collection("DiaryCard");

//caller function
function* callSubmitCardAction(data) {
  try {
    yield ref.add(data.data);
    yield put(fetchDataCaller());
  } catch (e) {
    yield put(submitFailure(e.toString()));
  }
}

//caller function
function* callFetchDataAction() {
  try {
    let cards = [];
    const data = yield ref.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        cards.push(doc.data());
      });
      return cards;
    });

    yield put(fetchData(data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(submitFailure(e.toString()));
  }
}

//watcher function
export default function* homeSaga() {
  yield takeLatest(SUBMIT_CARD, callSubmitCardAction);
  yield takeLatest(FETCH_DATA_CALLER, callFetchDataAction);
}
