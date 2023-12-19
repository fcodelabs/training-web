import {all} from "redux-saga/effects"
import {diarySaga} from "./saga/diarySaga";

export default function* rootSaga(){
    yield all(
        [
            diarySaga(),
        ]
    );
}