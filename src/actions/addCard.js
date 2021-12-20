import { CardTravelSharp, Store } from "@material-ui/icons";
import {collection, addDoc} from "firebase/firestore";
import db from '../Utils/firebaseConfig';

import * as type  from '../types';

export function addCard(card){
    return{
        type:type.ADD_CARD,
        payload:card,
    }
}


