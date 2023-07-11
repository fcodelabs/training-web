import { put, takeLatest, all } from 'redux-saga/effects';
import db from '../config/firebase';
import { setTodos } from './todoSlice';
import { collection, getDocs } from 'firebase/firestore/lite';
import { QueryDocumentSnapshot } from 'firebase/firestore';

function* fetchTodosSaga(): Generator<any, void, any> {
  try {
    const todoCollectionRef = collection(db, 'todos');
    const data = yield getDocs(todoCollectionRef);
    const todos = data.docs.map((doc: QueryDocumentSnapshot) => doc.data());
    yield put(setTodos(todos));
  } catch (error: any) {
    console.log('Error fetching todos:', error);
  }
}

function* watchFetchTodos() {
  yield takeLatest('todo/fetchTodos', fetchTodosSaga);
}

export default function* rootSaga() {
  yield all([watchFetchTodos()]);
}

