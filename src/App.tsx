import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignInPage from './containers/SignInPage/SignInPage';
import HomePage from './containers/HomePage/HomePage';
import Header from './components/header';
import SubmitCard from './containers/HomePage/SubmitCard/SubmitCard';
import DiaryCard from './containers/HomePage/DiaryCard/DiaryCard';
import AppRoutes from './utility/appRoutes';

function App() {
  return (
    <div className="App">

      <AppRoutes/>
    </div>
  );
}

export default App;
