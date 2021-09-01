import { takeEvery, call, put, takeLatest } from "@redux-saga/core/effects"
import { NICKNAME_SET, NICKNAME_LISTEN } from "./actionTypes"
import { nickNameSet } from "./actions";

function* callNickNameAction(data) {
    try {
        console.log(data.nickName)
        yield put(nickNameSet(nickNameSet()))
    } catch (e) {
        console.log(e.toString());
    }
}

export default function* nickNameSetSaga() {

    yield takeLatest(NICKNAME_LISTEN, callNickNameAction)
}