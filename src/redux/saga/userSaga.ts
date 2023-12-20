// userSaga.js
import { takeLatest, call, put } from 'redux-saga/effects';
import { getFirestore, collection, getDocs, QuerySnapshot } from 'firebase/firestore';
import { setUsers } from './../reducers/userReducer';


interface User {
id: string;
name: string;
}


function* fetchUsersSaga() {
try {
const firestore = getFirestore();
const usersCollection = collection(firestore, 'Users');


const querySnapshot: QuerySnapshot = yield call(getDocs, usersCollection);


const users: User[] = querySnapshot.docs.map((doc) => ({
id: doc.id,
name: doc.data().name,
}));


yield put(setUsers(users));
} catch (error) {
console.error('Error fetching users:', error);
}
}


export function* userSaga() {
yield takeLatest('users/fetchUsers', fetchUsersSaga);
}





