import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import AppRouter from "./components/AppRouter";
import SignIn from "./Containers/SignInFiles/SignIn";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
