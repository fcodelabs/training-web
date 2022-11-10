import { ArrowForward } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { setNickname } from "../../store/nicknameSlice";
import "./signIn.css";
import CompanyLogo from "../../components/CompanyLogo/CompanyLogo.js";
import { useNavigate } from "react-router-dom";

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
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const getRandomName = () => {
    let ran = Math.floor(Math.random() * randomNames.length);
    setRanName(randomNames[ran]);
  };

  return (
    <Grid container className="signin-main-container">
      <Grid container className="signin-inner-container-bg-image">
        <Grid xs={11} sm={10} md={8} lg={7} xl={6} className="signin-inner-container">
          <CompanyLogo />
          <div className="signin-form-container">
            <div className="signin-form-title"> Sign In </div>
            <div className="signin-form-nikname-input-conatiner">
              <RedditTextField
                label="Your Nickname*"
                value={ranName}
                onChange={(e) => {
                  setRanName(e.target.value);
                }}
                onBlur={() => {
                  setIsTouched(true);
                }}
                error={isTouched && ranName === ""}
                helperText={isTouched && ranName === "" ? "Required" : ""}
                id="reddit-input"
                variant="filled"
                className={["signin-form-nickname-input"]}
              />
              <Button
                variant="contained"
                className="signin-form-random-btn"
                onClick={getRandomName}
              >
                {" "}
                RANDOM{" "}
              </Button>
            </div>
            <Button
              variant="contained"
              disabled={ranName === "" || ranName.length <= 3}
              onClick={() => {
                dispatch(setNickname(ranName));
                navigate("/home");
              }}
              className="signin-form-continue-btn"
              endIcon={<ArrowForward />}
            >
              {" "}
              CONTINUE{" "}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 6,
    fontFamily: "Open Sans,sans-serif",
    letterSpace: "2px",
    height: "50px",
    color: "rgba(0, 0, 0, 0.87)",
    backgroundColor: "#ffffff",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
  },
}));

export default SignIn;
