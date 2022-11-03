import { ArrowForward } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import "./sign-in.css";
import CompanyLogo from "../../components/SignIn/company-logo";

let randomNames = [
  "Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "James",
  "William",
  "Benjamin",
  "Lucas",
  "Henry",
  "Theodore",
  "Jack",
  "Levi",
  "Alexander",
  "Jackson",
  "Mateo",
  "Daniel",
  "Michael",
  "Mason",
  "Sebastian",
  "Ethan",
  "Logan",
  "Owen",
  "Samuel",
];

const SignIn = () => {
  const [ranName, setRanName] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const getRandomName = () => {
    let ran = Math.floor(Math.random() * randomNames.length);
    setRanName(randomNames[ran]);
  };

  return (
    <Grid container className="signin-main-container">
      <Grid xs={11} md={8} lg={6} className="signin-inner-container">
        <CompanyLogo />
        <div className="signin-form-container">
          <div className="signin-form-title"> Sign In</div>
          <div className="signin-form-nikname-input-conatiner">
            <TextField
              id="outlined-basic"
              label="Your Nikname*"
              className="signin-form-nikname-input"
              variant="outlined"
              value={ranName}
              onChange={(e) => {
                setRanName(e.target.value);
              }}
              onClick={() => {
                setIsTouched(true);
              }}
              error={isTouched && ranName === ""}
              helperText={isTouched && ranName === "" ? "Required*" : ""}
            />
            <Button
              variant="contained"
              size="large"
              className="signin-form-random-btn"
              onClick={getRandomName}
            >
              {" "}
              RANDOM{" "}
            </Button>
          </div>
          <Button
            variant="contained"
            disabled={ranName === "" || ranName.length < 3}
            size="large"
            className="signin-form-continue-btn"
            endIcon={<ArrowForward />}
          >
            {" "}
            CONTINUE{" "}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
