import {takeLatest,all,put,fork,call} from 'redux-saga/effects';
import { FETCH_ALL,CREATE_ITEM,FETCH_ALL_FAIL,FETCH_ALL_START,FETCH_ALL_SUCCESS, ADD_POST_START } from './actionTypes/actionTypes'; 
import { getPostSuccess,getPostFail,getPostStart, addPostSuccess, addPostFail } from './actions/items';
import firebase from './firebase';

function* onLoadPostAsync(){
    try {
        const posts = yield firebase.firestore().collection('posts').get().then((snapshot)=>{
                const items = [];
                snapshot.forEach((doc)=>{
                    items.push(doc.data());
                });
                return items;
        });
        yield put(getPostSuccess([...posts]));
        
        //this does not work.

        // let posts = []
        //  yield firebase.firestore().collection('posts').onSnapshot((querySnapshot)=>{
        //     const items=[];
        //     querySnapshot.forEach((doc)=>{
        //         items.push(doc.data());
        //     });
        //     posts = items;
        // });
        // console.log(posts);
        // yield put(addPostSuccess(posts));

    } catch (error) {
        yield put(getPostFail())
    }
}
function* onAddPostSync({payload:post}){
    try {
        let new_post = {...post,createdAt:firebase.firestore.FieldValue.serverTimestamp()};
        yield firebase.firestore().collection('posts').add(new_post);
        yield put(addPostSuccess(new_post));
    } catch (error) {
        yield put(addPostFail(error));
    }

}

export function* onLoadPost(){
    yield takeLatest(FETCH_ALL_START,onLoadPostAsync)
}
export function* onAddPost(){
    yield takeLatest(ADD_POST_START,onAddPostSync);
}
const postSagas = [fork(onLoadPost),fork(onAddPost)];

export default function* rootSaga(){
    yield all([...postSagas]);
}