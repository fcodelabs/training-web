import React, { useState, useEffect } from "react";
import {  getTasks1 } from "../Home/actions";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "../../Components/Button";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from '@material-ui/core';
function Login({ getName }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    root1: {
      background: "linear-gradient(160deg , #FE6B8B , #FF8E53)",
      margin:"5%",
      width:"50%",
      height:"50%",
      align:"center",
    



      position: "absolute",
      left: "18%",
      top: "12%",


      borderRadius: 15,
      color: "white",
      padding: "10px 10px",
    },
    root2: {
      display: "inline-flex",
      flexDirection: "row",
      position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
     
    },
    tf: {
      
      
      width: "auto",
    },
    login:{
      margin:"8%",
      textAlign: "center",
    },
    start:{
      position: "relative",
      bottom: "-180px",
      
     
      textAlign: "center",
    },
  }));
  const cards11 = useSelector((state) => state.cards);
  const classes = useStyles();
  const history = useHistory();
  const routeChange = () => {
    if (!name) {
      console.log("missing Name");
      alert("missing Name");
      return;
    }
    getName(name);
    let path = `/home`;
    history.push(path);
  };
  const namelist = [];
  const onRandom = (e) => {
    e.preventDefault();

    cards11.map((card) => namelist.push(card.subtitle));
    const length = namelist.length;
    const num = Math.floor(Math.random() * length);
    setName(namelist[num]);
  };
  useEffect(() => {
    dispatch(getTasks1());
  }, []);

  return (
    <div className={classes.root1}>
      <div className={classes.login}>
        
        <Typography variant="h4">Login</Typography>
      </div>

      <br />
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.root2}>
          <TextField
            className={classes.tf}
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <Button color="pink" text="random" onClick={onRandom} />
        </div>
        <div className={classes.start}>

        <Button color="green" onClick={routeChange} text="start" />
        </div>
      </form>
    </div>
  );
}

export default Login;
