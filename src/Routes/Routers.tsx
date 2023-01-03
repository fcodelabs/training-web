import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Routers;
