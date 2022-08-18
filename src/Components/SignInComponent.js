import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField } from "@material-ui/core";
import FilterVintageRoundedIcon from "@mui/icons-material/FilterVintageRounded";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const SignIn = () => {
  const paperStyle = {
    padding: 30,
    height: "40vh",
    width: 400,
    margin: "200px auto",
  };
  const avatarStyle = { backgroundColor: "#4f14a6" };

  const [random, setRandomName] = useState("");
  const [error, setError] = useState("");

  const randomNameHandler = () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    setRandomName(text);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid container spacing={2}>
          <Grid xs={1.5}>
            <Avatar style={avatarStyle}>
              <FilterVintageRoundedIcon />
            </Avatar>
          </Grid>
          <Grid xs={3}>
            <p>Dear Diary</p>
          </Grid>
        </Grid>

        <h2>Sign In</h2>

        <TextField
          style={{ marginRight: "5px", marginBottom: "5px" }}
          id="username"
          label="Name"
          variant="outlined"
          required
          size="small"
          value={random}
        />

        <Button variant="contained" color="primary" onClick={randomNameHandler}>
          {" "}
          Random{" "}
        </Button>
        <div>
          <div>
            <Link to="/card">
              <Button type="submit" variant="contained" color="primary">
                Continue
              </Button>
            </Link>
          </div>
        </div>
      </Paper>
    </Grid>
  );
};

export default SignIn;
