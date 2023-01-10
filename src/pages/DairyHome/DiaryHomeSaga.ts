import { put, takeEvery, all } from "redux-saga/effects";
import { addMsgFailure, addMsgSuccess, getMsgFailure, getMsgSuccess } from "./DiaryHomeSlice";
import {addDoc, collection,getDocs} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";


const getMessages = async () => {
  try {
    var msgs = [] as any;
        const querySnapshot = await getDocs(collection(db, "messages"));
        querySnapshot.forEach((doc) => {
          let msg = [];
          msg.push(doc.data().title, doc.data().name, doc.data().description);
          msgs.push(msg);
          
        });
        return msgs
        
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
};

const postNewMessage = async (newMsg: {
  name: string;
  title: string;
  description: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: newMsg.name,
      title: newMsg.title,
      description: newMsg.description,
    });
    console.log("Document written with ID: ", docRef.id);
    const returnMsg = [ newMsg.title, newMsg.name, newMsg.description];
    return returnMsg;
  } catch (error) {
    console.log(error);
    return error;
  }
};

function* fetchMessages(): any {
  try {
    const msgs = yield getMessages();
    console.log(msgs)
    yield put(getMsgSuccess(msgs));
  } catch (e) {
    yield put(getMsgFailure());
  }
}

function* addNewMessageSaga(action: any) {
  try {
    const msg : [] = yield postNewMessage(action.payload);
    yield put(addMsgSuccess(msg));
  } catch (e) {
    yield put(addMsgFailure());
  }
}

function* messageSaga() {
  yield takeEvery("message/getMsgStart", fetchMessages);
}

function* NewMessage() {
  yield takeEvery("message/addMsgStart", addNewMessageSaga);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([messageSaga(), NewMessage()]);
}
