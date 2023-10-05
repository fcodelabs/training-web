import { Route, Routes } from "react-router-dom";
import Signin from "../../containers/Signin";
import Home from "../../containers/Home";
import { ROUTE_HOME, ROUTE_SIGNIN } from "../../util/routeConstants";

export default function Content() {
  return (
    <Routes>
      <Route path={ROUTE_SIGNIN} element={<Signin />} />
      <Route path={ROUTE_HOME} element={<Home />} />
    </Routes>
  );
}
