import { Provider } from "react-redux";
import "./App.css";
import SignIn from "./components/SignIn";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SignIn />
      </div>
    </Provider>
  );
}

export default App;
