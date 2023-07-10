import React, { useState } from "react";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import "./App.css";
import Main from "./containers/Main/Main";
import Signin from "./containers/Signin/Signin";


function App() {
  
  const [name, setName] = useState<string>('');

  const nameHandler = (name:string) => {
    console.log(name)
    setName(name)
  }

  

  return (
    <Router> 
        <Routes>
        <Route path="/" element={<Signin nameHandler={nameHandler} />} />
        <Route path="/home" element={<Main name={ name} />}/>
        </Routes>
      </Router>
    
  )
}

export default App;










