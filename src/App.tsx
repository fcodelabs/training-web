import React from 'react';
import Login from './pages/SignInPage/Login';
import Box from "@mui/material/Box";
import { Grid } from '@mui/material';
import Home from './pages/DiaryHome/home';
import { Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='home' element={<Home/>}>
            <Route path=':userName' element={<Home/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
