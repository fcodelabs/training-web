import { Provider } from "react-redux";
import RootRoutes from "./components/RootRoutes/RootRoutes";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RootRoutes />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );

export default App;
