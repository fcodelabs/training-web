import React, {useState} from "react";
import {Box} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {useDispatch} from "react-redux";
import {login} from "../redux/loginAction";
import Cookies from "js-cookie";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    width: 700,
    height: 300,
    left: "50%",
    top: "50%",
    transform: `translate(-50%, -50%)`,
    borderRadius: 10,
    backgroundColor: "white",
  },
  title: {
    position: "absolute",
    color: `rgba(48, 138, 224, 0.87)`,
    fontSize: "2.125rem",
    fontFamily: `Open Sans,sans-serif`,
    fontWeight: 400,
    lineHeight: 1.17,
    top: 60,
    left: "50%",
    transform: `translateX(-50%)`,
  },
  formContainer: {
    position: "absolute",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    height: 80,
    left: "50%",
    top: "55%",
    transform: `translate(-50%, -50%)`,
  },
  autoComplete: {
    width: 300,
  },
  randomButton: {
    width: 80,
    height: 30,
    top: -5,
    color: "white",
    backgroundColor: "#039BE5",
    borderRadius: 20,
    border: "none",
    fontSize: 12,
    "&:hover": {
      backgroundColor: "#01579B",
    },
  },
  continueButton: {
    position: "absolute",
    color: "white",
    width: 150,
    height: 40,
    backgroundColor: "#039BE5",
    borderRadius: 25,
    bottom: 40,
    left: "50%",
    transform: `translateX(-50%)`,
    border: "none",
    fontFamily: `Open Sans,sans-serif`,
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "#01579B",
    },
  },
});

function Login() {
  const classes = useStyles();

  //states
  const [name, setName] = useState("");
  const [isError, setIsError] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const randomeNames = [
    "William",
    "Benjamin",
    "Logan",
    "James",
    "Noah",
    "Liam",
  ];

  //router history
  const history = useHistory();

  //dispatcher
  const dispatch = useDispatch();

  //name handler
  function nameHandler(event) {
    if (event.target.value.length > 0) {
      setName(event.target.value);
      setIsError(false);
      setButtonDisabled(false);
    } else {
      setIsError(true);
      setButtonDisabled(true);
    }
  }

  //name on focus
  function nameOnFocusHandler(event) {
    if (event.target.value.length > 0) {
      setName(event.target.value);
      setIsError(false);
      setButtonDisabled(false);
    } else {
      setIsError(true);
      setButtonDisabled(true);
    }
  }

  //random name generate
  function randomNameHandler() {
    let randName =
        randomeNames[Math.floor(Math.random() * randomeNames.length)];
    setName(randName);
    setIsError(false);
    setButtonDisabled(false);
  }

  //continue button handler
  function continueHandler() {
    Cookies.set("userId", name, {expires: 1});
    let user = Cookies.get("userId");
    if (user !== "") {
      history.replace("/home");
      dispatch(login(name));
    }
  }

  return (
      <Box className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Sign In
        </Typography>
        <Box className={classes.formContainer}>
          <Autocomplete
              className={classes.autoComplete}
              freeSolo
              value={name}
              id="free-solo-2-demo"
              disableClearable
              options={randomeNames.map((data) => data)}
              renderInput={(params) => (
                  <TextField
                      error={isError}
                      {...params}
                      label="Your Nickname *"
                      margin="normal"
                      variant="outlined"
                      InputProps={{...params.InputProps, type: "search"}}
                      helperText={isError && "Required"}
                      size="small"
                      onChange={nameHandler}
                      onFocus={nameOnFocusHandler}
                  />
              )}
          />
          <Button
              variant="outlined"
              className={classes.randomButton}
              onClick={randomNameHandler}
          >
            RANDOM
          </Button>
        </Box>
        <Button
            variant="outlined"
            className={classes.continueButton}
            disabled={isButtonDisabled && true}
            onClick={continueHandler}
        >
          CONTINUE
          <ArrowForwardIcon style={{paddingLeft: 10}}/>
        </Button>
      </Box>
  );
}

export default Login;
