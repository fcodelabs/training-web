import React, { useState } from "react";
import Box from "@mui/material/Box";
// eslint-disable-next-line
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
// eslint-disable-next-line
import FormHelperText from "@mui/material/FormHelperText";
// eslint-disable-next-line
import Input from "@mui/material/Input";
// eslint-disable-next-line
import InputLabel from "@mui/material/InputLabel";
// eslint-disable-next-line
import OutlinedInput from "@mui/material/OutlinedInput";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// eslint-disable-next-line
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TextField from "@mui/material/TextField";

export default function SignIn() {
  const [activeContinue, setActiveContinue] = useState(false);
  const [name, setName] = useState("");
  const [requiredMessage, setRequiredMessage] = useState("");

  const generateRandomName = () => {
    const names = ["Aiden", "Brew", "John", "Zahir", "Jessica", "Lyan"];
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  };

  const handleInput = (e) => {
    if (e.target.value.length > 0) {
      setName(e.target.value);
      setActiveContinue(true);
      setRequiredMessage("");
    } else {
      setRequiredMessage("Name is required");
      setActiveContinue(false);
    }
    setName(e.target.value);
  };

  return (
    <Box item xs={3}>
      <Card variant="outlined">
        <Box
          component="form"
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "30vh" }}
          bgcolor="white"
          sx={{ borderRadius: "40px" }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 30, color: "#0097A7", my: 2, fontWeight: 'bold' }}
              gutterBottom
            >
              Sign In
            </Typography>
            <Stack
              spacing={4}
              direction="row"
              sx={{ justifyContent: "center" }}
              alignItems="center"
              justify="center"
            >
              <FormControl sx={{ my: 2 }}>
                <TextField
                  id="outlined-password-input"
                  type="text"
                  onChange={(e) => handleInput(e)}
                  label="Your Name"
                  value={name}
                  required
                />
                {name ? (
                  ""
                ) : (
                  <FormHelperText error>{requiredMessage}</FormHelperText>
                )}
              </FormControl>
              <div sx={{ my: 0.5 }}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    borderRadius: "16px",
                    backgroundColor: "#0097A7",
                    ":hover": { backgroundColor: "#0097A7" },
                  }}
                  onClick={generateRandomName}
                >
                  Random
                </Button>
              </div>
            </Stack>
            {activeContinue ? (
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 10,
                  mx: "20px",
                  my: 2,
                  px: 3,
                  backgroundColor: "#0097A7",
                  ":hover": { backgroundColor: "#0097A7" },
                }}
              >
                Continue <ArrowRightAltIcon />
              </Button>
            ) : (
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 10,
                  mx: "20px",
                  my: 2,
                  px: 3,
                  bgcolor: "#e0e0e0",
                  ":hover": { backgroundColor: "#e0e0e0" },
                  pointerEvents: "none",
                }}
              >
                Continue <ArrowRightAltIcon />
              </Button>
            )}
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
