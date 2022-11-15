import { takeEvery } from 'redux-saga/effects';
import {DiaryHomeActions} from '../DiaryHomeSlice'
import fetchCard from './fetchCard'
import putNewCard from './putNewCard'

export default function* DiaryHomeSaga(){
    yield takeEvery(DiaryHomeActions.addNewCard,putNewCard);
    yield takeEvery(DiaryHomeActions.fetchAllCard,fetchCard);
} 

