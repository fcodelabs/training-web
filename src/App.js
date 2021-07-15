import DiaryHome from "./component/DiaryHome";
import SignIn from "./views/SignIn";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {  BrowserRouter as Router, Route,} from "react-router-dom";
import 'firebase/firestore';

function App() {
  const classes = useStyles();
  //const cards = useSelector((state) => state.cards);
  // const addCard = (card) => {
  //   const id = Math.floor(Math.random() * 1000) + 1;
  //   const newCard = { id, ...card };
  //   setCards([...cards, newCard]);
  // };

  return (
    <div className={classes.root}>
      <Router><Route exact path="/">
            <SignIn/>
      </Route>
      <Route exact path="/home">
     
      <DiaryHome />
      
        </Route></Router>
     
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    margin: "auto",
    width: "90%",
    minHeight: "800px",
    color: "white",
  }
 
});

export default App;