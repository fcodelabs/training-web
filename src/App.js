import React from 'react';
import DiaryHome from './Pages/Home/DiaryHome';
import SignIn from './Pages/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

      <Route exact path="/">
            <SignIn/>
        </Route>
        
        <Route exact path="/home">
            <DiaryHome/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
