import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn/SignInPage";

import DiaryHome from "./pages/DiaryHome/DiaryHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="home" element={<DiaryHome />} />
      </Routes>
    </>
  );
}

export default App;
