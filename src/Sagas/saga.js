import { takeEvery, call} from 'redux-saga/effects';
import GetAllCards from '../Pages/actions/get-cards';

function* handleGetCards(){
    yield call(GetAllCards);
}

export default function* watcherCardSaga(){
    yield takeEvery("GET_ALL_CARDS", handleGetCards)
}

