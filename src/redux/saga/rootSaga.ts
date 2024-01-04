import { all } from 'redux-saga/effects';
import cardSaga from './cardSaga';
import { userSaga } from './userSaga';


function* rootSaga() {
yield all([
cardSaga(),
userSaga(),
]);
}


export default rootSaga;



