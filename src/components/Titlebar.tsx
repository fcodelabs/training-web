import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

const Titlebar = () => {
  return (
    <div>
      <Grid
        container
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item m={4}>
          <Typography variant="h4" sx={{ color: "#fff", fontWeight: "700" }}>
            Home
          </Typography>
        </Grid>

        <Grid item m={4}>
          <Typography
            paragraph
            sx={{
              color: "rgba(255, 255, 255, 0.5)",
              fontWeight: "500",
              fontSize: "0.75rem",
            }}
          >
            You are here: Home
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Titlebar;
