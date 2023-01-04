import React from 'react';
import './App.css';
import Login from './Login';
import Box from "@mui/material/Box";
import { Grid } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
>
  <Login/>
</Box>
    </div>
  );
}

export default App;
