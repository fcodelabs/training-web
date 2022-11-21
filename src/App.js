import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn/SignInPage";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
