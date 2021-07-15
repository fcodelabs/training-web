import {takeLatest} from 'redux-saga/effects';
import {REDUX_SAGA_ADD_CARD,REDUX_SAGA_GET_CARDS}  from "../Actions/diaryType"
import watchForCards from "../Saga/getCardsSaga"
import addCardtoFirebase from "../Saga/addCardSaga"

function* watchHomePageSagas() {
    yield takeLatest(REDUX_SAGA_GET_CARDS, watchForCards);
    yield takeLatest(REDUX_SAGA_ADD_CARD, (action)=>addCardtoFirebase(action));
 }

export const homePageSagas = [watchHomePageSagas]