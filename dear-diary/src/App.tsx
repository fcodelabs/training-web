import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './containers/SignInPage/SingInPage';
import { CssBaseline } from '@mui/material';
import { green, blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
          <Routes>
              <Route path="/" element={<SignInPage />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
