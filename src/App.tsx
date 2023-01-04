import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import DiaryHome from "./pages/DiaryHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />}/>
        <Route path="home" element={<DiaryHome />}/>
      </Routes>
    </>
  );
}

export default App;
