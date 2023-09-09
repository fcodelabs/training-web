import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// TODO: Add more colors
const theme = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export default function ThemeWrapper(props: Props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
