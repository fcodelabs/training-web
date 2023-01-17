import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInForm from "../pages/SignInForm/SigninForm";
import DieryHome from "../pages/DiaryHome/DiaryHome";
import React from "react";


function AppRouter(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignInForm/>} />
            <Route path="/home" element={<DieryHome/>} />
        </Routes>
    </BrowserRouter>
}


export default AppRouter