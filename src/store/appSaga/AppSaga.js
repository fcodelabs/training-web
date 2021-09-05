import { ref, set } from "firebase/database";

export function* addCard(card) {
    try {
        yield set(ref(db, 'users/' + card.id), card);
    } catch (error) {
        console.log("Error >>>> ", error)
    }
}