import {takeLatest} from 'redux-saga/effects';
import {REDUX_SAGA_ADD_CARD,REDUX_SAGA_GET_CARDS}  from "./DiaryType"
import watchCardSaga from "./watchCardSaga"
import addCardSaga from "./addCardSaga"
// import { addCard } from './Saga';


function* watchHomePageSagas() {
    yield takeLatest(REDUX_SAGA_GET_CARDS, watchCardSaga);
    yield takeLatest(REDUX_SAGA_ADD_CARD,addCardSaga);
 }

export const homePageSagas = [watchHomePageSagas]