import { all } from 'redux-saga/effects';
import watcherCardSaga from './saga';

export default function* rootSaga(){
    yield all([watcherCardSaga()]);
}