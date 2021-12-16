import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './Pages/SignInPage/SignIn';
import DiaryHome from './Pages/HomePage/DiaryHome/DiaryHome';

function App() {
  return (
    <div className="App">
    <Switch>
        <Route component={SignIn} path="/" exact={true} />
        <Route component={DiaryHome} path="/DiaryHome" />
      </Switch>

    <DiaryHome/>
    </div>
  );
}

export default App;




