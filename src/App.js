import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DiaryHome from "./pages/DiaryHome";
import SignIn from "./pages/SignInPage";
import { useDispatch } from "react-redux";
import { diaryActions } from "./redux/diarySlice";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(diaryActions.getDiaries());
    }, [dispatch]);

    return (
        <div className="App">
            <div className="App-header">MemoPal.</div>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/home/:userName" element={<DiaryHome />} />
            </Routes>
        </div>
    );
};

export default App;
