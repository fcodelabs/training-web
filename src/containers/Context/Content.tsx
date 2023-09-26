import { Route, Routes } from "react-router-dom";
import SignInPage from "../SignInPage/SignInPage";
import HomePage from "../HomePage/HomePage";
import { defaultRoute, homeRoute } from "../../utils/RoutesUtil";

const Content = () => {
  return (
    <Routes>
      <Route path={defaultRoute} element={<SignInPage />} />
      <Route path={homeRoute} element={<HomePage />} />
    </Routes>
  );
};

export default Content;
