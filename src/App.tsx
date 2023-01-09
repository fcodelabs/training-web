import React from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn/index';
import Home from './pages/DairyHome/index';

function App() {
  return (
    <BrowserRouter>
    <Routes>
         <Route path="/" element={<SignIn/>} />
         <Route path="/home" element={<Home/>} />
     </Routes> 
     </BrowserRouter>
  );
}

export default App;
