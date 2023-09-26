import { Route, Routes } from "react-router-dom";
import SignInPage from "../SignInPage/SignInPage";
import HomePage from "../HomePage/HomePage";

const Context = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default Context;
