import {  put, takeEvery, all } from "redux-saga/effects";
import { getMsgFailure, getMsgSuccess } from "./DiaryHomeSlice";
// Add a second document with a generated ID.
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
interface msgData {
  name: string;
  title: string;
  description: string;
}

const getMessages = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "messages"));
    var temp: msgData[];
    temp = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name}`);
      const name = doc.data().name;
      const title = doc.data().title;
      const description = doc.data().description;

      temp.push({ name, title, description });
    });
    return temp;
    //  distpatch(getMsgSuccess(temp));
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
};

const postNewMessage = async (newMsg: {
  name: any;
  title: any;
  description: any;
}) => {
  try {
    console.log(newMsg);
    const docRef = await addDoc(collection(db, "messages"), {
      name: newMsg.name,
      title: newMsg.title,
      description: newMsg.description,
    });
    console.log("Document written with ID: ", docRef.id);
    //console.log(datcRef);
  } catch (error) {
    console.log(error);
  }
};

function* fetchMessages(): any {
  try {
    const msgs = yield getMessages();
    yield put(getMsgSuccess(msgs));
  } catch (e) {
    yield put(getMsgFailure());
  }
}
function* addNewMessageSaga(action: any) {
  try {
   
    yield postNewMessage(action.payload);
  } catch (e) {
    console.log(e);
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* messageSaga() {
  yield takeEvery("message/getMsgStart", fetchMessages);
}
// eslint-disable-next-line require-yield
function* NewMessage() {
 yield  takeEvery("message/addMsgStart", addNewMessageSaga);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([messageSaga(), NewMessage()]);
}
