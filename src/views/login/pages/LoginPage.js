import React, { useContext, useState } from "react";
import style from "../../../components/pages/LoginPage.module.css";
import { Button, CardContent, makeStyles, Typography } from "@material-ui/core";
import Card from "../../Card/pages/Card";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router";
import AuthContext from "../../../../src/components/util/authContext";
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 70,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    height: 300,
    boxShadow: 200,
    orderRadius: 70,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 201,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  pIcon: {
    color: "crimson",
  },
  txtField: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  name: {
    left: "40%",
    transform: `translateX(-40%)`,
    borderRadius: 20,
    width: 400,
    marginTop: 20,
  },
  button: {
    left: "40%",
    transform: `translate(-120%,70%)`,
  },
  button2: {
    left: "25%",
    transform: `translate(-500%,8em)`,
    backgroundColor: "darkblue",
  },
  topic: {
    left: "40%",
    transform: `translateX(45%)`,
    color: "crimson",
    fontWeight: "bold",
    fontSize: 30,
  },
}));

function LoginPage() {
  const [randName, setRandName] = useState("");
  const history = useHistory();
  const Auth = useContext(AuthContext);

  function randomNameGenerator() {
    let name = Math.random().toString(36).slice(-5);
    setRandName(name);
    console.log(randName);
  }

  const classes = useStyles();

  function loginValueHandler(event) {
    setRandName(event.target.value);
  }

  function loginHandler() {
    Auth.setAuth(true);
    history.replace("/add-diary");
    Cookies.set("user", "loginTrue");
  }

  return (
    <div className={style.main}>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <PersonAddIcon className={classes.pIcon} />
            <Typography component="h5" variant="h5" className={classes.topic}>
              Sign In
            </Typography>
            <TextField
              id="outlined-basic"
              label="Your nick name*"
              variant="outlined"
              className={classes.name}
              value={randName}
              onChange={loginValueHandler}
            >
              {randName}
            </TextField>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={randomNameGenerator}
            >
              Random
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disabled={randName.trim().length === 0}
              className={classes.button2}
              onClick={loginHandler}
            >
              Login
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
