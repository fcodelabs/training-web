import CardAddingForm from "./Components/CardAddingForm/CardAddingForm";
import HomePage from "./Containers/HomePage/HomePage";
import SignIn from "./Containers/SignIn/SignIn";

interface RouteConfig {
  path: string;
  element: React.ComponentType<any>;
}
const routes: RouteConfig[] = [
  {
    path: "/",
    element: SignIn,
  },
  {
    path: "/home",
    element: HomePage,
  },
  {
    path: "/addingForm",
    element: CardAddingForm,
  },
];

export default routes;
