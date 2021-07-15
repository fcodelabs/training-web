import firebase from '../config'

export default function addCardtoFirebase(action){
    console.log("Added")
    firebase.firestore().collection("cards")
        .add(action.payload)
}