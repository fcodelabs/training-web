import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />}/>
        <Route path="home" element={<HomePage />}/>
      </Routes>
    </>
  );
}

export default App;
