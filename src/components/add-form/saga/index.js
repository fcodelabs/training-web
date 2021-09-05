import { takeLatest } from 'redux-saga/effects';
import { addNewCardSaga, requestCardsSaga } from './AddFormSaga';

export const addFormSagas = [
    takeLatest("ADD_NEW_CARD", addNewCardSaga),
    takeLatest("REQUEST_CARDS", requestCardsSaga)
]