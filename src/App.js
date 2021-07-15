import './App.css';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Pages/Home/Home';


function App() {
  return (
    <container style={{ margineLeft: 10 }}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Router>
    </container>
  );
}

export default App
