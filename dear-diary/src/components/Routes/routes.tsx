import HomePage from "../../containers/HomePage/HomePage";
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
    element: <HomePage />,
  },
];

export default routes;
