import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignInPage from './containers/SignInPage/SignInPage';
import HomePage from './containers/HomePage/HomePage';
import Header from './components/header';
import SubmitCard from './containers/HomePage/components/submitCard';

function App() {
  return (
    <div className="App">
        
        {/* <SignInPage/> */}
        {/* <Header/> */}
        <HomePage/>
        {/* <SubmitCard/> */}
    </div>
  );
}

export default App;
