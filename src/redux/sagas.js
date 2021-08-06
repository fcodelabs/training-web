import {call, put, takeEvery} from 'redux-saga/effects'
import {fetchDiaryCard} from "../actions/diaryCard";

const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

function getApi() {
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(e => {
            throw e
        })
}

function* fetchPosts(action) {
    try{
        const diaryCards = yield call(getApi)
        yield put(fetchDiaryCard(diaryCards))
    } catch (e){

    }
}