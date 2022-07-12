import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DearDiaryPage from './Pages/DearDiaryPage';
import DearDiarySignin from './Pages/DearDiarySignin';
import image from '../src/Assets/background.jpg'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple, teal } from '@mui/material/colors';


//custom theme for web
const theme = createTheme({

  palette: {
    primary: teal,
    secondary: {
      main: "#00a152",
    },
  },
})

function App() {

  

 return (
    //Routing the Pages
    <div className="App" style={{

      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat',
      position:'absolute',
      width: '100%',
      height: '150%',
      

    }}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='/Home' element={<DearDiaryPage  />}>
            </Route>
            <Route exact path="/" element={<DearDiarySignin />}>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
