import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Pages/SignInPage/SignIn';
import DiaryHome from './Pages/DiaryHome/DiaryHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/home" element={<DiaryHome/>}/>
          </Routes>

      </BrowserRouter>

   
    </div>
  );
}

export default App;