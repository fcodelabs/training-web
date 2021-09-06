import { ref, set, get, child } from "firebase/database";
import { put } from "redux-saga/effects";
import { db } from "../../../fbConfig"

export function* addNewCardSaga(action) {
    const input = action.payload;
    try {
        yield set(ref(db, 'users/' + input.id), input);
    } catch (error) {
        console.log("Error >>>> ", error)
    }
}

export function* requestCardsSaga() {
    try {
        const response = [];
        const dbRef = ref(db);
        yield get(child(dbRef, `users`)).then((snapshot) => {
            if (snapshot.exists()) {
                response.push(...snapshot.val().map(card => {
                    const temp_card = {
                        id: card.id,
                        title: card.title,
                        name: card.name,
                        description: card.description
                    }
                    return temp_card;
                }))
            }
        }).catch((error) => {
            console.error(error);
        });
        yield put({ type: 'STORE_CARDS', payload: response })
    } catch (error) {
        console.log("Error >>>> ", error)
    }
}



