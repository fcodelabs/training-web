import { take, call, put, takeEvery } from "redux-saga/effects";
import { DiaryHomeActions } from "./DiaryHomeSlice";
import { eventChannel } from "redux-saga";
import { db } from "../../firebaseConfig";
import {collection, addDoc,onSnapshot,orderBy,query,} from "firebase/firestore";


export default function* DiaryHomeSaga() {
  yield takeEvery(DiaryHomeActions.addNewCard, putNewCard);
  yield takeEvery(DiaryHomeActions.fetchAllCard, fetchCard);
}

//fetch all cards=============================
function* fetchCard() {
  //const error=useSelector((state) => state.diaryHome.cardFailures)

  const dataSet = query(collection(db, "Users"), orderBy("time"));
  const channel = eventChannel((emit) => onSnapshot(dataSet, emit));
  
  while (true) {
    try {
      const data = yield take(channel);
      const cards = data.docs.map((doc) => ({ idd: doc.id, ...doc.data() }));
      yield put(DiaryHomeActions.setCardSuccess(cards));
    } catch (error) {
      console.error("error:", error);
      yield put(DiaryHomeActions.setCardFail('Error :'+ error))
    }
  }
}


//add new card=============================
const userCollectionRef = collection(db, "Users");

function* putNewCard(payload) {
  try {
    yield call(putCard, payload);
  } catch (error) {
    console.log(error);
    yield put(DiaryHomeActions.setCardFail('Error :'+ error))
  }
}
async function putCard({ payload }) {
  await addDoc(userCollectionRef, {
    time: payload.time,
    name: payload.name,
    title: payload.title,
    description: payload.description,
  });
}


// export default function CustomizedSnackbars() {
//   const [open, setOpen] = React.useState(false);

//   const handleClick = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <Stack spacing={2} sx={{ width: '100%' }}>
//       <Button variant="outlined" onClick={handleClick}>
//         Open success snackbar
//       </Button>
//       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
//           This is a success message!
//         </Alert>
//       </Snackbar>
//       <Alert severity="error">This is an error message!</Alert>
//     </Stack>
//   );
// }
