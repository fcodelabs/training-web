import { takeEvery, call, put, takeLatest } from "@redux-saga/core/effects"
import { NICKNAME_SET } from "./actioTypes"
import { nickNameSet } from "./loginAction";

function* callNickNameAction() {
    try {
        yield put(nickNameSet("Udara J"))
    } catch (e) {
        console.log(e.toString());
    }
}

export default function* loginSaga() {

    yield takeLatest(NICKNAME_SET, callNickNameAction)
}