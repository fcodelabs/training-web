import {
  put,
  all,
  take,
  call,
  takeEvery,
} from "redux-saga/effects";
import dbF from "../config/firebase";
import { setTodos, fetchTodos } from "./todoSlice";
import {
  Firestore,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { eventChannel } from "redux-saga";

interface Todo {
  todo: string;
  userName: string;
  description: string;
}

// EeventChannel watching changes in the database
function snapShotChannel(db: any) {
  return eventChannel<Todo[]>((emitter) => {
    const todosRef = collection(db, "todos");
    const unsubscribe = onSnapshot(todosRef, (querySnapshot) => {
      const updatedEntries: Todo[] = [];
      querySnapshot.forEach((doc) => {
        const entry = doc.data() as Todo;
        updatedEntries.push(entry);
      });
      // Emitter the updated entries to the channel
      emitter(updatedEntries);
    });
    return unsubscribe;
  });
}

// Saga to fetch todos from the database
function* fetchTodosSaga(): Generator<any, any, any> {
  const db: Firestore = dbF;
  console.log("fetchTodosSaga");
  const channel = yield call(snapShotChannel, db);
  try {
    while (true) {
      const todoList: Todo[] = yield take(channel);
      // console.log({ todoList });
      yield put(setTodos(todoList));
    }
  } finally {
  }
}

export default function* rootSaga() {
  yield all([takeEvery(fetchTodos, fetchTodosSaga)]);
}
