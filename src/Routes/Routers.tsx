import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/DiaryHome/Home";
import SignIn from "../Pages/SignInPage/SignIn";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Routers;
