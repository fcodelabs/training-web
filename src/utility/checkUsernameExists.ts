import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const checkUsernameExists = async (
    username: string
  ): Promise<string | null> => {
    try {
      const userCollectionRef = collection(db, "Users");
      const q = query(userCollectionRef, where("name", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Username exists
        const userDoc = querySnapshot.docs[0];
        const userId = userDoc.id;
        console.log("Registered User", userId);
        return userId; // Return user ID
      } else {
        // Username doesn't exists
        console.log("Not a registered user");
        return null;
      }
    } catch (error) {
      console.error("Error checking username:", error);
      return null;
    }
  };