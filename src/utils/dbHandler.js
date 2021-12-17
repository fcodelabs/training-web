import firebase from './firebase';
import { collection, onSnapshot, query, addDoc } from '@firebase/firestore'
import store from './configureStore';

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
    const docRef = await addDoc(collection(firebase, "Post"), {
        name: data.name,
        title: data.title,
        description: data.description,
        created: Date.now()
    });
}
