import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  interface userState {
    user: { currentUser: any; isFetching: any; error: any };
  }
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
