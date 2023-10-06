import { Route, Routes } from "react-router-dom";
import SignInPage from "../../containers/SignInPage/SignInPage";
import HomePage from "../../containers/HomePage/HomePage";
import { DEFAULT_ROUTE, HOME_ROUTE } from "../../utils/routesUtil";

const RootRoutes = () => {
  return (
    <Routes>
      <Route path={DEFAULT_ROUTE} element={<SignInPage />} />
      <Route path={HOME_ROUTE} element={<HomePage />} />
    </Routes>
  );
};

export default RootRoutes;
