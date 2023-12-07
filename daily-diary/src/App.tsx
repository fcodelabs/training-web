import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Containers/SignIn/SignIn";
import HomePage from "./Containers/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
