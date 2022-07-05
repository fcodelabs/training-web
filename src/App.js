import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DearDiaryPage from './Pages/DearDiaryPage';
import DearDiarySignin from './Pages/DearDiarySignin';
import image from '../src/Assets/background.jpg'
import { width } from '@mui/system';
import { convertLength } from '@mui/material/styles/cssUtils';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal, lightGreen } from '@mui/material/colors';

//custom theme for web
const theme = createTheme({

  palette: {
    primary: teal,
    secondary: {
      main: '#009688',
    },
  },
})

function App() {
  return (
    //Routing the Pages
    <div className="App" style={{
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      
      width: '100%',
      height: '100%'


    }}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path='/' element={<DearDiaryPage />}>
            </Route>
            <Route path="/SignIn" element={<DearDiarySignin />}>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
