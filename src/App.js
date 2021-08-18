import {Route, Switch} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
      <div>
          <Switch>
              <Route path='/' exact={true}>
                  <HomePage/>
              </Route>
              <Route path='/home-page'>
                  <LoginPage/>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
