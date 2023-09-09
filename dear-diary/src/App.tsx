import "./App.css";
import { useSelector } from "react-redux";
import { State } from "./store/reducers";
import ThemeWrapper from "./components/ui/theme";
import UserRegister from "./routes/registerRoute";
import UserRoutes from "./routes/userRoutes";

function App() {
  const userName = useSelector((state: State) => state.userName);
  return (
    <ThemeWrapper>{userName ? <UserRoutes /> : <UserRegister />}</ThemeWrapper>
  );
}

export default App;
