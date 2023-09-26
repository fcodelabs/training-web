import { Route, Routes } from "react-router-dom";
import SignInPage from "../../containers/SignInPage/SignInPage";
import HomePage from "../../containers/HomePage/HomePage";
import { defaultRoute, homeRoute } from "../../utils/RoutesUtil";

const Context = () => {
  return (
    <Routes>
      <Route path={defaultRoute} element={<SignInPage />} />
      <Route path={homeRoute} element={<HomePage />} />
    </Routes>
  );
};

export default Context;
