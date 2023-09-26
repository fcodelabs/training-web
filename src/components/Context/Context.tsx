import { Route, Routes } from "react-router-dom";
import Signin from "../../containers/Signin";

export default function Content() {
  return (
    <Routes>
      <Route path="/" element={<Signin />}></Route>
    </Routes>
  );
}
