import React, { useState } from "react";
import logo from "../../logo.svg";
import "../../App.css";
import RandomButton from "../../components/Buttons/RandomButton";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";

function SignIn() {
  const themeBackground = createTheme({
    palette: {
      background: {
        default: "linear-gradient(to right bottom, #430089, #82ffa1)",
      },
    },
  });

  return (
    <Container
      maxWidth={false}
      sx={{
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
        <Container>
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
        </Container>
        <Container sx={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "Arial ",
              color: "blueviolet",
              fontWeight: "lighter",
            }}
          >
            Sign In
          </h1>
          <Container>
            <RandomButton />
          </Container>
        </Container>
      </Box>
    </Container>
  );
}

export default SignIn;
