import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./pages/DiaryHome/HomePage";
import Login from "./pages/SigninPage/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userState } from "./helpers/Interfaces";

function App() {
 
  const user = useSelector((state: userState) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user.currentUser ? <HomePage /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
