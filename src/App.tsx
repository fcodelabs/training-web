import { Provider } from "react-redux";
import Context from "./containers/Context/Context";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store}>
      <Context />
      <ToastContainer />
    </Provider>
  );
};

export default App;
