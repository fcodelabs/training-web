import { collection } from "firebase/firestore";
import { db } from "./firestore-init";

export const diaryCollectionRef = collection(db, "diaries");
