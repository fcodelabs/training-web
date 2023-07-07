import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "../SignInPage/SignIn";
import DiaryHome from "../Diary/DiaryHome";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/DiaryHome" element={<DiaryHome />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
