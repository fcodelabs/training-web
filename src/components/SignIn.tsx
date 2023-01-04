import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.svg";
import Avatar from "@mui/material/Avatar";

const config: Config = {
  dictionaries: [names],
};

const SignIn = () => {
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const handleRandom = (event: React.MouseEvent<HTMLElement>) => {
    setName(uniqueNamesGenerator(config));
    setDisabled(false);
  };

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
    setDisabled(false);
    setError(false);
    setHelperText("");
    if (event.currentTarget.value === "") {
      setDisabled(true);
      setError(true);
      setHelperText("Required");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        width: 650,
        height: 220,
        backgroundColor: "#FFFF",
        border: 0,
        borderRadius: "16px",
        p: 4,
      }}
    >
      <Grid container columnSpacing={1}>
        <Grid>
          <Avatar src={Logo} sx={{ width: 30, height: 30 }} />
        </Grid>
        <Grid>
          <Link id="dear-diary-link" to={"/"}>
            Dear Diary
          </Link>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        display="flex"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* Sign in heading */}
        <Grid
          xs={12}
          display="flex"
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb={2}
        >
          <Typography sx={{ color: "#039BE5" }} variant="h4">
            Sign In
          </Typography>
        </Grid>

        {/* Input box and random button */}
        <Grid
          display="flex"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            error={error}
            id="inputbox"
            label="Your Nickname*"
            helperText={helperText}
            value={name}
            sx={{
              width: 350,
            }}
            onChange={handleOnchange}
          />

          <Button
            onClick={handleRandom}
            sx={{ borderRadius: "20px", backgroundColor: "#039BE5", ml: 2 }}
            variant="contained"
          >
            Random
          </Button>
        </Grid>
        {/* Continue button */}

        <Grid
          xs={12}
          display="flex"
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            sx={{ borderRadius: "20px", backgroundColor: "#039BE5" }}
            variant="contained"
            disabled={disabled}
          >
            Continue &rarr;
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignIn;
