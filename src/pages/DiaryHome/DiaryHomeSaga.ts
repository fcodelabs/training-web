import { put, takeEvery, all, call, take, cancelled } from "redux-saga/effects";
import {
  addMsgFailure,
  addMsgSuccess,
  getMsgFailure,
  getMsgSuccess,
} from "./DiaryHomeSlice";
// Add a second document with a generated ID.
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";
import { eventChannel,EventChannel } from "redux-saga";
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
interface msgData {
  Id: string;
  name: string;
  title: string;
  description: string;
  colour: string;
  time: Date;
}

function getcards() {
  const q = query(collection(db, "messages"), orderBy("time", "asc"));
  return eventChannel((emitter) => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let cardList: msgData[] = [];

      querySnapshot.forEach((doc) => {
        cardList.push({
          Id: doc.id,
          title: doc.data().title,
          name: doc.data().name,
          description: doc.data().description,
          colour: doc.data().colour,
          time: doc.data().time,
        });
      });
      // console.log(cardList)
      emitter(cardList);
    });
    return unsubscribe;
  });
}
const getMessages = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "messages"));
    var temp: msgData[];
    temp = [];
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data().name}`);
      const Id = doc.id;
      const name = doc.data().name;
      const title = doc.data().title;
      const description = doc.data().description;
      const colour = doc.data().colour;
      const time = doc.data().time;
      temp.push({ Id, name, title, description, colour, time });
    });
    return temp;
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
};

const postNewMessage = async (newMsg: {
  name: any;
  title: any;
  description: any;
  colour: any;
  time: any;
}) => {
  try {
    // console.log(newMsg);
    const date = new Date();
    const docRef = await addDoc(collection(db, "messages"), {
      name: newMsg.name,
      title: newMsg.title,
      description: newMsg.description,
      colour: "test",
      time: date,
    });
    console.log("Document written with ID: ", docRef.id);
    //console.log(datcRef);
    const returnMsg = { Id: docRef.id, ...newMsg };
    return returnMsg;
  } catch (error) {
    console.log(error);
    return error;
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

 function*  fetchMessagesList() {
    const chan: EventChannel<msgData[]> = yield call(getcards);
    try{
        while (true) {
            let cards: msgData[] = yield take(chan)
            yield put(getMsgSuccess(cards));
        }
    }finally {
        let val: boolean = yield cancelled()
        if(val){
            chan.close()
        }
    }
}

//addMsgSucces
function* addNewMessageSaga(action: any) {
  try {
    const msg = yield postNewMessage(action.payload);
   // yield put(addMsgSuccess(msg));
  } catch (e) {
    yield put(addMsgFailure());
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* messageSaga() {
  yield takeEvery("message/getMsgStart", fetchMessagesList);
}
// eslint-disable-next-line require-yield
function* NewMessage() {
  yield takeEvery("message/addMsgStart", addNewMessageSaga);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([messageSaga(), NewMessage()]);
}
