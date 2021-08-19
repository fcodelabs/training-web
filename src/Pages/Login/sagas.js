import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { setName } from './actions'
import { endLoading, startLoading } from '../App/actions'

function getRandomName () {
  const options = {
    method: 'GET',
    url: 'https://random-data-api.com/api/name/random_name',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
  }
  return axios.request(options)
}

export function * handleRandomName () {
  try {
    yield put(startLoading())
    const response = yield call(getRandomName)
    yield put(setName(response.data.first_name))
    yield put(endLoading())
  } catch (e) {
    console.log(e)
  }
}
