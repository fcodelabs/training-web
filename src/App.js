import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/todo/layout/Navbar';
import Todo from './components/todo/Todo';


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
