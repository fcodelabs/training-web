import React, { useState } from "react";
import "./App.css";
import Main_Page from "./pages/Main_Page";
import Signin from "./pages/Signin";

function App() {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [name, setName] = useState('');

  const nameHandler = (name) => {
    console.log(name)
    setName(name)
  }

  const pageHandler = () => {
    setIsFirstPage(state=>!state);
  };

  return <div className="App">
    {isFirstPage ? <Signin pageHandler={ pageHandler } nameHandler={nameHandler} />:<Main_Page pageHandler={ pageHandler } name={name} />}
  </div>;
}

export default App;

