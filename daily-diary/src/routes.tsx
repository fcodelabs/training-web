import HomePage from "./Containers/HomePage/HomePage";
import SignIn from "./Containers/SignIn/SignIn";

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
