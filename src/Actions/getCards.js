import db from "../Config/firestoreConfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import { store } from "../Components/store";

export default function GetAllCards(){
    // const dispatch = useDispatch();
    const q = query(collection(db, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
            posts.push(doc.data());
        });
        store.dispatch({type: "newCard", payload: posts});
    });   
}




    

