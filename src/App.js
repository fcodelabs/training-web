import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignUp from './Components/SignUp/SignUp';
import Navbar from './Components/Layout/Navbar';
import Todo from './Components/Todo/DiaryHome';


import React, { useState } from "react";
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<header className="App App-header">
        < SignUp/>
      </header>}/>
      <Route path = "todo" element = {<Todo/>} />
    </Routes>
    </BrowserRouter>   
  );
}
export default App;
