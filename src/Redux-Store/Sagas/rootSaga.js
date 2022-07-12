import { all, put, fork, takeEvery, call, delay } from "redux-saga/effects";
import * as types from "../Actions/ActionType"
import collectionRef from "../../Config/fbConfig"
import { Add_Todo_Fail, Add_Todo_Success, get_Todo_Success, get_Todo_Fail, SignIn_Success, SignIn_Fail, Deleting_Success, Deleting_Fail, get_Todo_Start } from "../Actions/Action";
import { doc, getDocs, addDoc,onSnapshot,  query} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {channel} from 'redux-saga'
import { eventChannel } from "@redux-saga/core";


export function* SignInWatcherAsync({ payload: auth }) {
    try {
       let credentials = [];
        yield call(() => credentials.push({name: auth.name}))
        
        yield put(SignIn_Success(credentials));


    } catch (error) {
        yield put(SignIn_Fail());
    }
}


//GET Todo
export function* GetToDoWatcherAsync() {
    try {
        
        let Todos = []
        yield call(() =>
            
            getDocs(collectionRef).then((snapshot) => {
               
            snapshot.docs.forEach((doc) =>             
            Todos.push({ ...doc.data(), id: doc.id }))
            console.log(Todos)
                
           
        }))
        //delay to fetch data from store
        console.log(Todos)
        yield delay(2000);
        
        yield put(get_Todo_Success(Todos))
        
    } catch (error) {
        yield put(get_Todo_Fail())
    }
}

//ADD Todo

export function* ADDToDoWatcherAsync({ payload: todos  }) {
   
    console.log(todos.title)
    try {
        yield call(() => addDoc(collectionRef, {
            name: todos.name,
            title: todos.title,
            description: todos.description
        }))
        
        yield put(Add_Todo_Success());
        

    } catch (error) {
        yield put(Add_Todo_Fail());
    }
}


export function* GetToDoWatcher() {
    yield takeEvery(types.GET_TODO_START, GetToDoWatcherAsync )
};
export function* AddToDoWatcher() {
    yield takeEvery(types.ADD_TODO_START, ADDToDoWatcherAsync)
}
export function* SignInWatcher() {
    yield takeEvery(types.SIGN_IN_START, SignInWatcherAsync)
}

//fork the watcher Saga 
const Sagas = [fork(GetToDoWatcher), fork(AddToDoWatcher), fork(SignInWatcher) ];

//Main Saga
export default function* rootSaga() {
    yield all([...Sagas]);
}