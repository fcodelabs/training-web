import ProtectedHome from "../../containers/ProtectedHome/ProtectedHome";
import SignIn from "../../containers/SignIn/SignIn";

interface RouteConfig {
  id: number;
  path: string;
  element: React.ReactNode;
}
const routes: RouteConfig[] = [
  {
    id: 1,
    path: "/",
    element: <SignIn />,
  },
  {
    id: 2,
    path: "/home",
    element: <ProtectedHome />,
  },
];

export default routes;
