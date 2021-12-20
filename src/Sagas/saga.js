import { takeEvery, call} from 'redux-saga/effects';
import GetAllCards from '../Actions/getCards';

function* handleGetCards(){
    yield call(GetAllCards);
}

export default function* watcherCardSaga(){
    yield takeEvery("GET_ALL_CARDS", handleGetCards)
}

