import "./App.css";
import { Login } from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import { Main } from "./Pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </>
  );
}

export default App;
