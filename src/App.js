import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";



function App() {

  return (
    <div >
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
    </div>
  );
}


export default App;

