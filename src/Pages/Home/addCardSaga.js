import fb from "../../utils/config"

export default function addCardtoFirebase(action){
    fb.firestore().collection("cards").add(action.payload)
}