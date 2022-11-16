// import { collection, addDoc, getDocs } from "firebase/firestore";
// import db from "./firebase";

// export const addDiaryCard = async (data) => {
//   try {
//     const docRef = await addDoc(collection(db, "Post"), data);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// };

// export const getDiaryData = async () => {
//   const querySnapshot = await getDocs(collection(db, "Post"));
//   const tempDiaryList = [];
//   querySnapshot.forEach((doc) => {
//     const id = doc.id;
//     tempDiaryList.push({
//       id,
//       ...doc.data(),
//       created: doc.data().created.toDate().toDateString(),
//     });
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
//   return tempDiaryList;
// };
