import './App.css';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './containers/SignInPage/SingInPage';
import DiaryHome from './containers/DiaryHome/DiaryHome';
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
  const [user, setUser] = useState<string>('');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
          <Routes>
              <Route path="/" element={<SignInPage setUser={setUser} />} />
              <Route path="/Diary" element={<DiaryHome user={user} />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
