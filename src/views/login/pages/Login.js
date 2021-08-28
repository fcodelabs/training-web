import React, {useState} from "react";
import {Box} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

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

  return (
      <Box className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Sign In
        </Typography>
        <Box className={classes.formContainer}>
          <Autocomplete
              className={classes.autoComplete}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={top100Films.map((option) => option.title)}
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
                      value={name}
                      onChange={nameHandler}
                      onFocus={nameOnFocusHandler}
                  />
              )}
          />
          <Button variant="outlined" className={classes.randomButton}>
            RANDOM
          </Button>
        </Box>
        <Button
            variant="outlined"
            className={classes.continueButton}
            disabled={isButtonDisabled && true}
        >
          CONTINUE
          <ArrowForwardIcon style={{paddingLeft: 10}}/>
        </Button>
      </Box>
  );
}

const top100Films = [
  {title: "The Shawshank Redemption", year: 1994},
  {title: "The Godfather", year: 1972},
  {title: "The Godfather: Part II", year: 1974},
  {title: "The Dark Knight", year: 2008},
  {title: "12 Angry Men", year: 1957},
  {title: "Schindler's List", year: 1993},
];

export default Login;
