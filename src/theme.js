import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#11cb5f",
    },
    danger: {
      main: "#e53e3e",
    },
  },
});

export default theme;
