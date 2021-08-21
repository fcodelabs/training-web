import {takeLatest,all,put,fork,call,take} from 'redux-saga/effects';
import { FETCH_ALL_START, ADD_POST_START } from './actionTypes';
import { getPostSuccess,getPostFail, addPostSuccess, addPostFail } from './actions';
import firebase from '../../utils/firebase';
import { eventChannel } from '@redux-saga/core';

// const getPostsAPI = () => {
//     return new Promise((resolve, reject) => {
//         firebase.firestore().collection("posts").onSnapshot((snap) => {
//             let documents = [];
//             snap.forEach(doc => {
//                 let result = doc.data();
//                 documents.push(result);
//             });
//             resolve(documents);
//         });
//     });
// };

function* onLoadPostAsync(){
    try {
        const channel = new eventChannel(emiter=>{
            const listner =firebase.firestore().collection("posts").onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    let result = doc.data();
                    documents.push(result);
                });
                emiter({data:documents||{}})

            });
            return ()=>{
                listner.off();
            };
        });
        while(true){
            const {data }= yield take(channel);
            console.log(data);
            yield put(getPostSuccess(data));
        }



        // while (true) {
        //     const response = yield call(getPostsAPI);
        //     yield put(getPostSuccess(response));
        // }


        // const posts = yield firebase.firestore().collection('posts').get().then((snapshot)=>{
        //         const items = [];
        //         snapshot.forEach((doc)=>{
        //             items.push(doc.data());
        //         });
        //         return items;
        // });
        // yield put(getPostSuccess([...posts]));
        
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
        //get Once
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