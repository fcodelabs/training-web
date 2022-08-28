import db from "./firebase";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";

export async function addDiaryCard(card: {
  name: string;
  title: string;
  description: string;
  created: Timestamp;
}) {
  const diaryCards = collection(db, "diaryCards");
  await addDoc(diaryCards, card);
}

export async function getDiaryCards() {
  const diaryCards = collection(db, "diaryCards");
  const cards = await getDocs(query(diaryCards, orderBy("payload.created")));
  const cardArray = cards.docs.map((doc) => doc.data());
  return cardArray;
}
