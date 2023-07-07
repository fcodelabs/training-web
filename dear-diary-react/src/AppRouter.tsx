import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Cards from "./Cards";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
