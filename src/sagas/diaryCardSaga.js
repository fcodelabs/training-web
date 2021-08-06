import {call, put,} from 'redux-saga/effects'
import {addDiaryCard, loadAllDiaryCards} from "../actions/diaryCard";
import axios from 'axios';
import {endLoading, startLoading} from "../actions/global";

const apiUrl = 'https://my-json-server.typicode.com/salitha-fcl/dummy-json-server/diary-notes'

function getApi() {
    return axios.request({
        method: 'GET',
        url: apiUrl
    })
}

export function* handleFetchPosts(action) {
    try {
        yield put(startLoading())
        const response = yield call(getApi);
        const {data} = response
        console.log("diaryCard", data)
        yield put(loadAllDiaryCards(data))
        yield put(endLoading())
    } catch (e) {
        console.log(e)
        yield put(endLoading())
    }

}
