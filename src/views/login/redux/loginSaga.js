import {LOGIN} from "./loginActionType";
import {put, takeLatest} from "@redux-saga/core/effects";
import {loginFailure, loginSuccess} from "./loginAction";

//caller function
function* callLoginAction(data) {
  try {
    yield put(loginSuccess(data.name, "Done"));
  } catch (e) {
    yield put(loginFailure(e.toString()));
  }
}

//watcher function
export default function* loginSaga() {
  yield takeLatest(LOGIN, callLoginAction);
}
