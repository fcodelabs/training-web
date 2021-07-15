import React, { useState, useEffect } from "react";
import {  getTasks1 } from "../Action/actions";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "../Components/Button";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
      background: "linear-gradient(45deg , #FE6B8B , #FF8E53)",
      border: 0,
      // margin: "10%",

      position: "absolute",
      left: "25%",
      top: "25%",
      transform: "translate(-50%, -25%)",

      borderRadius: 15,
      color: "white",
      padding: "5px 10px",
    },
    root2: {
      display: "inline-flex",
      flexDirection: "row",
    },
    tf: {
      width: "auto",
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
      <div>
        <h1>login</h1>
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

          <Button color="green" text="random" onClick={onRandom} />
        </div>

        <Button color="green" onClick={routeChange} text="start" />
      </form>
    </div>
  );
}

export default Login;
