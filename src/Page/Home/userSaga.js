import { put, takeEvery } from "redux-saga/effects";

import { collection } from "../../utils/firebase";
import { saveTasks } from "./actions";

function* addCard(data) {
  try {
    yield collection.add(data);
  } catch (e) {
    console.log(e);
  }
}
export function* getCard() {
  try {
    let cardsList = [];

    yield collection.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let title = doc.data().title;
        let description = doc.data().description;
        let subtitle = doc.data().subtitle;
        cardsList.push({
          title: title,
          description: description,
          subtitle: subtitle,
        });
      });
    });

    yield put(saveTasks(cardsList));
  } catch (e) {
    console.log(e);
    return false;
  }
}

function* userSaga() {
  yield takeEvery("getCard", getCard);
  yield takeEvery("addCard", addCard);
}

export default userSaga;
