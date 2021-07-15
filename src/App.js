import "./App.css";
import React, { useState } from "react";

import Home from "./Page/Home";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./Page/Login";
function App() {
  const addName = (name) => {
    
    setName(name);
  };
  const [name, setName] = useState("");

  return (
    <Router>
      <Redirect from="/" to="login" />
      <Route path="/home">
        <Home name={name}></Home>
      </Route>
      <Route path="/login">
        <Login getName={addName}></Login>
      </Route>
    </Router>
  );
}

export default App;
