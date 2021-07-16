import {takeLatest} from 'redux-saga/effects';
import {REDUX_SAGA_ADD_CARD,REDUX_SAGA_GET_CARDS}  from "./diaryType"
import watchForCards from "./getCardsSaga"
import addCardtoFirebase from "./addCardSaga"

function* watchHomePageSagas() {
    yield takeLatest(REDUX_SAGA_GET_CARDS, watchForCards);
    yield takeLatest(REDUX_SAGA_ADD_CARD, (action)=>addCardtoFirebase(action));
 }

export const homePageSagas = [watchHomePageSagas]