import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContinueButton from "./components/ContinueButton";
import TextFieldsOutlined from "./components/TextfieldOutlined";
import RandomButton from "./components/RandomButton";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "cyan",
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
          <Typography
            variant="h6"
            style={{ fontFamily: "Arial", marginLeft: "8px" }}
          >
            Dear Diary
          </Typography>
        </div>
        <div className="App">
          <h1>Sign In</h1>
          <div>
            <Grid
              container
              // spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid>
                <TextFieldsOutlined />
              </Grid>
              <Grid>
                <RandomButton />
              </Grid>
            </Grid>
          </div>
          <br></br>
          <ContinueButton />
        </div>
      </Box>
    </div>
  );
}

export default App;
