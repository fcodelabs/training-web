import { takeEvery, put } from "@redux-saga/core/effects";
//import firebase from "firebase/app";
import { collection } from '../Utility/Firebase';
import { fetchCards } from "../Store/Action/Action";

function* saveCard(data) {

    try {
        yield collection.add(data)
    } catch (error) {
        console.log("Error", error);
    }
}


function* getCards() {
    
    const cards = yield collection.get().then((querySnapshot) => {
        let dbCards = []
        querySnapshot.forEach((doc) => {
            let title = doc.data().sendTitle;
            let description = doc.data().sendDescription;

            dbCards.push({ title: title, description: description })
        });
        return dbCards

    });

    yield put(fetchCards(cards))
}

function* rootSaga() {
    yield takeEvery('addNew', saveCard);
    yield takeEvery('getCards', getCards)
}

export default rootSaga;