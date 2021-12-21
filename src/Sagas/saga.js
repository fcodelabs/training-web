import { takeLatest, call} from 'redux-saga/effects';
import GetAllCards from '../Pages/actions/get-cards';
import AddCards from '../Pages/actions/add-cards';

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




