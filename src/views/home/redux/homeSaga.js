import {put, takeLatest} from "redux-saga/effects";
import {SUBMIT_CARD} from "./homeActionType";
import {submitFailure, submitSuccess} from "./homeAction";
import firebase from "../../../util/firebase";

//caller function
function* callSubmitCardAction(data) {
  try {
    yield firebase.firestore().collection("DiaryCard").add(data.data);
    yield put(submitSuccess("Done"));
  } catch (e) {
    yield put(submitFailure(e.toString()));
  }
}

//watcher function
export default function* homeSaga() {
  yield takeLatest(SUBMIT_CARD, callSubmitCardAction);
}
