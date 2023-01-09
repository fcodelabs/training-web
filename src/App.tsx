import React from 'react';
import Login from './Login';
import Box from "@mui/material/Box";
import { Grid } from '@mui/material';
import Home from './home';
import { Routes, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='home' element={<Home/>}>
            <Route path=':userName' element={<Home/>}/>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
