import { takeEvery, takeLatest, put, } from "@redux-saga/core/effects";
import { collection } from "../../utils/fbConfig";
import { getnoteList } from "../Actions/notesAction";


function* addCard(data) {
    try {
        yield collection.add(data)
    } catch (error) {
        console.log("ERROR", error)
    }
}


function* getList() {
    try {
        const notesList = yield collection.get().then((notes) => {
            let cardsList = []
            notes.forEach((note) => {
                let tittle = note.data().payload.tittle
                let description = note.data().payload.description
                let userName = note.data().payload.userName
                let id = note.data().payload.id
                cardsList.push({
                    tittle,
                    description,
                    userName,
                    id
                })
            })
            return cardsList
        })

        yield put(getnoteList(notesList))

    } catch (error) {
        console.log("ERROR", error)
    }
    // const channel = eventChannel(emitter => {
    //     const listener = collection.onSnapshot((snapshot) => {
    //         emitter({ data: snapshot.docs });
    //     });

    //     return () => {
    //         listener.off();
    //     };
    // });
    // while (true) {
    //     const { data } = yield take(channel)
    //     console.log(data)
    // }
}

function* rootSaga() {
    yield takeEvery('ADD_NOTE', addCard)
    yield takeLatest('GET_LISTS', getList)
}

export default rootSaga;