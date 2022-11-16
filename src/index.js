import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { diaryErrorColor, diaryPrimaryColor } from "./utils/themeColor";

import { store } from "./store.js";
import { Provider } from "react-redux";

export const appTheme = createTheme({
  palette: {
    primary: diaryPrimaryColor,
    error: diaryErrorColor,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline enableColorScheme />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
