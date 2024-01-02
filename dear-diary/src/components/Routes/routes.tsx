import ProtectedHome from "../../containers/ProtectedHome/ProtectedHome";
import SignIn from "../../containers/SignIn/SignIn";

interface RouteConfig {
  id: number;
  path: string;
  element: React.ReactNode;
}

export const paths = {
  SignIn: "/",
  HomePage: "/home",
};
const routes: RouteConfig[] = [
  {
    id: 1,
    path: paths.SignIn,
    element: <SignIn />,
  },
  {
    id: 2,
    path: paths.HomePage,
    element: <ProtectedHome />,
  },
];

export default routes;
