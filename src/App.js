import React, {useEffect, useState} from "react";
import "./App.css";
import Login from "./views/login/pages/Login";
import Home from "./views/home/pages/Home";
import {Redirect, Route, Switch} from "react-router-dom";
import Cookies from "js-cookie";
import {useDispatch, useSelector} from "react-redux";
import {login} from "./views/login/redux/loginAction";
import ProgressCircular from "./components/progress_circular/ProgressBar";

function App() {
  //states
  const [isLoading, setLoading] = useState(true);
  const [tempData, setTempData] = useState("");

  //reducer
  const userId = useSelector((state) => state.loginReducer.name);

  //dispatcher
  const dispatch = useDispatch();

  //effects
  useEffect(() => {
    const user =
        Cookies.get("userId") !== undefined ? Cookies.get("userId") : null;
    setTempData(user);
    dispatch(login(user));
  }, [dispatch]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
      <div className="App">
        {isLoading ? (
            <ProgressCircular/>
        ) : (
            <Switch>
              <Route path="/" exact>
                {userId !== null ? <Redirect to="/home"/> : <Login/>}
                <Login/>
              </Route>
              <Route path="/login">
                <Redirect to="/"/>
              </Route>
              <Route path="/home">
                {tempData !== null ? <Home/> : <Redirect to="/"/>}
                {/*<Home/>*/}
              </Route>
            </Switch>
        )}
      </div>
  );
}

export default App;
