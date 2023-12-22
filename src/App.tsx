import "./App.css";
import SignIn from "./containers/SignIn/SignIn";
import DiaryHome from "./containers/DiaryHome/DiaryHome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="diaryApp">
      <Router>
        <Routes>
          <Route path="/home" element={<DiaryHome />} />
          <Route path="/" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
