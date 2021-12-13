import firebase from './firebase';
import { collection, setDoc, onSnapshot, query, doc } from '@firebase/firestore'
import store from './store/configureStore';

let cardId = 0

export function addCardToStore() {
    const q = query(collection(firebase, "Post"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const cardList = []
        querySnapshot.forEach((doc) => (
            cardList.push({...doc.data(), color: 'black'})
        ))
        store.dispatch({
            type : "addFirebaseData",
            payload : cardList
        })
    });
}

export async function addNewCard(data) {
    let documentName = "cards" + (cardId++).toString()
    await setDoc(doc(firebase, "Post", documentName), {
        name: data.name,
        title: data.title,
        description: data.description,
        created: Date.now()
    });
}
