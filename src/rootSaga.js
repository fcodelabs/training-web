import { spawn } from 'redux-saga/effects';
import DiaryHomeSaga from '../src/pages/DiaryHome/sagas/DiaryHomeSaga'
export default function* rootSaga(){
    yield spawn(DiaryHomeSaga)
}