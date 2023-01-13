import { put, takeEvery, all, call, take, cancelled } from "redux-saga/effects";
import { addDiaryCardFailure, addDiaryCardSuccess, getDiaryCardFailure, getDiaryCardSuccess } from "./DiaryHomeSlice";
import {addDoc, collection,getDocs,query,onSnapshot} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { EventChannel, eventChannel } from "redux-saga";

const getMessages = async () => {
  return eventChannel(emitter => {
    const qry = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(qry, (querySnapshot) => {
        const msgs = querySnapshot.docs.map((doc) => (
          [doc.data().title, doc.data().name, doc.data().description]
        ));
        emitter(msgs)
    });
    return unsubscribe;
    })
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
  const chan: EventChannel<any> = yield call(getMessages);
  try {
    while(true){
      let msgs = yield take(chan);
      yield put(getDiaryCardSuccess(msgs));
    }
    } finally {
    let val: boolean = yield cancelled()
    if(val){
        chan.close()
    }
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
