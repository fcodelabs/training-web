import {takeEvery} from 'react-redux/effects';

function mySaga(){
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);

    export default mySaga;
}