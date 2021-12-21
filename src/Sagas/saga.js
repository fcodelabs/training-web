import { takeLatest, call} from 'redux-saga/effects';
import GetAllCards from '../Actions/getCards';
import AddCards from '../Actions/AddCards';

function* handleGetCards(){
    yield call(GetAllCards);
}

function* handleAddCards(action){
    yield call(AddCards, action.payload);
}

export default function* watcherCardSaga(){
    yield takeLatest("GET_ALL_CARDS", handleGetCards);
    yield takeLatest("ADD_ALL_CARDS", handleAddCards);
}




