import React from "react";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import "./App.css";
import Main from "./containers/Main/Main";
import Signin from "./containers/Signin/Signin";


function App() {

  return (
    <Router> 
        <Routes>
        <Route path="/" element={<Signin  />} />
        <Route path="home" element={<Main  />}/>
        </Routes>
      </Router>
    
  )
}

export default App;










