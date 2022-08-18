import React, { useEffect } from "react";
import "./App.css";
import SignIn from "./Components/SignInComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { useState } from "react";

function App() {

  const [token, setToken] = useState("")

    return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<SignIn />}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
