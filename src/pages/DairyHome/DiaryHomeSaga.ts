import { put, takeEvery, all } from "redux-saga/effects";
import { addDiaryCardFailure, addDiaryCardSuccess, getDiaryCardFailure, getDiaryCardSuccess } from "./DiaryHomeSlice";
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

const addNewMessage = async (newMessage: {
  name: string;
  title: string;
  description: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      name: newMessage.name,
      title: newMessage.title,
      description: newMessage.description,
    });
    console.log("Document written with ID: ", docRef.id);
    const returnMsg = [ newMessage.title, newMessage.name, newMessage.description];
    return returnMsg;
  } catch (error) {
    console.log(error);
    return error;
  }
};

function* getAllMessages(): any {
  try {
    const msgs = yield getMessages();
    console.log(msgs)
    yield put(getDiaryCardSuccess(msgs));
  } catch (e) {
    yield put(getDiaryCardFailure());
  }
}

function* addMessage(action: any) {
  try {
    const msg : [] = yield addNewMessage(action.payload);
    yield put(addDiaryCardSuccess(msg));
  } catch (e) {
    yield put(addDiaryCardFailure());
  }
}

function* getMessageSaga() {
  yield takeEvery("message/getDiaryCards", getAllMessages);
}

function* AddMessageSaga() {
  yield takeEvery("message/addDiaryCard", addMessage);
}

export default function* rootSaga() {
  yield all([getMessageSaga(), AddMessageSaga()]);
}
