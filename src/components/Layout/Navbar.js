import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "./Navbar.css";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import { useLocation } from "react-router-dom";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Grid from "@mui/material/Grid";

export default function Navbar() {
  const location = useLocation();
  return (
    <div>
      <Grid container spacing={1}>
        <AppBar position="static" style={{ background: "transparent" }}>
          <Toolbar>
            <Grid xs={10}>
              <Typography>Todo</Typography>
              <LowPriorityIcon />
            </Grid>
            <Grid>
              <h1>
                Hi {location.state.inputname} <EmojiPeopleIcon />
              </h1>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}
