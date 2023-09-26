import React, { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, Grid } from "@mui/material";
import { theme } from "../../theme/theme";

const SignInPage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  const generateRandomName = () => {
    const randomNames = ["Akila", "Kavindu","Pasan", "Charlie", "David", "Eve"];
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    setName(randomNames[randomIndex]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Submitted name: ${name}`);
    navigate("/home", { state: { name: name } });
  };

  const isSubmitDisabled = name.trim() === "";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card
            style={{ padding: "2rem", borderRadius: "10px", margin: "10px" }}
          >
            <h1 style={{ textAlign: "center" }}>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ marginBottom: "1rem" }}
                />
                <Button
                  sx={{
                    width: "100%",
                    padding: "0.5rem 2rem",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={generateRandomName}
                >
                  Generate
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: "1rem",
                    width: "100%",
                    padding: "0.5rem 2rem",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                  disabled={isSubmitDisabled}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInPage;
