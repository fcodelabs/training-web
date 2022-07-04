import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DearDiaryPage from './Pages/DearDiaryPage';
import DearDiarySignin from './Pages/DearDiarySignin';
import image from '../src/Assets/background.jpg'
import { width } from '@mui/system';

function App() {
  return (
    //Routing the Pages
    <div className="App" style={{ backgroundImage: `url(${image})`,
    width: '100%',
    height:'725px'
    

    }}>
      <Router>
        <Routes>
          <Route exact path='/' element={<DearDiaryPage />}>
          </Route>
          <Route path="/SignIn" element={<DearDiarySignin />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
