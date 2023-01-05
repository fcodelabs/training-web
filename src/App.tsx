import React from 'react';
import SignInForm from "./pages/SignInForm/SigninForm";
import DieryHome from "./pages/DiaryHome/DiaryHome";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignInForm/>} />
                <Route path="/home" element={<DieryHome/>} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
