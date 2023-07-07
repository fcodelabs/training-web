import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContinueButton from "./components/ContinueButton";
import TextFieldsOutlined from "./components/TextfieldOutlined";
import RandomButton from "./components/RandomButton";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

function SignIn() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right bottom, #430089, #82ffa1)",
      }}
    >
      <Box
        sx={{
          width: 800,
          height: 300,
          border: 1,
          borderRadius: "15px",
          borderColor: "primary.main",
          backgroundColor: "white",
        }}
      >
        <div>
          <Grid container>
            <img
              src={logo}
              alt="React Logo"
              style={{ width: "50px", marginLeft: "2px" }}
            />
            <Typography
              variant="subtitle1"
              style={{
                fontFamily: "Arial",
                marginLeft: "8px",
                fontWeight: "lighter",
                marginTop: "6px",
              }}
            >
              Dear Diary
            </Typography>
          </Grid>
        </div>
        <div className="App">
          <h1
            style={{
              fontFamily: "Arial ",
              color: "blueviolet",
              fontWeight: "lighter",
            }}
          >
            Sign In
          </h1>
          <div>
            <RandomButton />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default SignIn;
