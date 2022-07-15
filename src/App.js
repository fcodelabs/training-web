import { Route, Routes } from "react-router-dom";
import "./App.css";
import DiaryHome from "./pages/DiaryHome";
import SignIn from "./pages/SignInPage";

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
