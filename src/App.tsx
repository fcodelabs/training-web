import { Provider } from "react-redux";
import Content from "./containers/Context/Content";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Provider store={store}>
      <Content />
      <ToastContainer />
    </Provider>
  );
};

export default App;
