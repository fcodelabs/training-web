import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './containers/SignInPage/SingInPage';
import DiaryPage from './containers/DiaryPage/DiaryPage';
import { CssBaseline } from '@mui/material';
import { blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: '#b9e9ff',
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
              <Route path="/Diary" element={<DiaryPage />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
