import { Grid } from "@mui/material";
import React from "react";
import { Login } from "./Login";

export const Main = () => {
  return (
    
      <Grid
        container
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{height:"100vh"}}
      >
        <Grid>
          <Login />
        </Grid>
      </Grid>
    
  );
};
