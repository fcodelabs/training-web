import db from "../../utils/firestore-config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { store } from "../../store";

export default function GetAllCards(){
    // const dispatch = useDispatch();
    const q = query(collection(db, "posts"),orderBy("created"));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
            posts.push(doc.data());
        });
        store.dispatch({type: "newCard", payload: posts});
    });
    console.log(unsubscribe)
}




    

