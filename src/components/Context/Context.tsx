import { Route, Routes } from "react-router-dom";
import Signin from "../../containers/Signin";
import Home from "../../containers/Signin/Home";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Signin />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}
