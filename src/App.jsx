import { AppBar, Container,Grid,Button,Toolbar } from '@material-ui/core';
import React from 'react';
import  {BrowserRouter,Switch,Route} from "react-router-dom";
import DiaryHome from './Pages/DiaryHome/DiaryHome';
import './index.css'
import Login from './Pages/Auth/Login';
function App(){
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/Home" exact component={DiaryHome} ></Route>
                </Switch>
                <Switch>
                    <Route path="/" exact component={Login} ></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;