import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import reactDom from 'react-dom';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import SignIn from './component/sign';
import Diary from './component/diary';
import NewCard from './component/newcard';

//import { BrowserRouter as Router, Switch,Route, Redirect,} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element ={<SignIn/>}/>
            <Route exact path='/diary' element ={<Diary/>}/>
            <Route exact path='/card' element ={<NewCard/>}/>

          </Routes>
      </BrowserRouter>
    
  );

}

export default App;
