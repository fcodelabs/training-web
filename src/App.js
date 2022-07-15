import { collection, getDocs } from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DiaryHome from "./pages/DiaryHome";
import SignIn from "./pages/SignInPage";
import { db } from "./services/firebase";

const querySnapshot = async () => await getDocs(collection(db, "diaryEntries"));
// const diaryEntries = (querySnapshot) =>
//     querySnapshot.forEach((doc) => {
//         const diaryEntries = [];
//         const docData = doc.data();
//         diaryEntries.push({
//             name: docData.name,
//             description: docData.description,
//             userName: docData.userName,
//             backgroundColor: docData.backgroundColor,
//         });
//         return diaryEntries;
//     });

console.log(querySnapshot());

const App = () => {
    return (
        <div className="App">
            <div className="App-header">MemoPal.</div>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home" element={<DiaryHome />} />
            </Routes>
        </div>
    );
};

export default App;
