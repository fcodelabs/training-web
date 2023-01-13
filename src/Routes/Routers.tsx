import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/DiaryHome/Home";
import SignIn from "../Pages/SignInPage/SignIn";
import { useSelector } from "react-redux";

function Routers() {
  const user = useSelector((state: any) => state.user);
  const islogged = user.isloggedin;
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />

      <Route path="/home" element={islogged ? <Home /> : <SignIn />} />
    </Routes>
  );
}

export default Routers;
