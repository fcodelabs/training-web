import { Route, Routes } from "react-router-dom";
import { ROUTE_HOME, ROUTE_SIGNIN } from "../../util/routes";
import Signin from "../../containers/Signin/Signin";
import Home from "../../containers/Home/Home";

export default function Content() {
  return (
    <Routes>
      <Route path={ROUTE_SIGNIN} element={<Signin />} />
      <Route path={ROUTE_HOME} element={<Home />} />
    </Routes>
  );
}
