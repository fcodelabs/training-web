import React, { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { ThemeProvider } from "@emotion/react";

import { Box, Container, CssBaseline } from "@mui/material";
import { theme } from "../../theme/theme";


const SignInPage: React.FC = () => {
  const [name, setName] = useState<string>("");

  const generateRandomName = () => {
    const randomNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    setName(randomNames[randomIndex]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Submitted name: ${name}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Card style={{ padding: "2rem", borderRadius: "10px" }}>
            <h1 style={{ textAlign: "center" }}>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ marginRight: "1rem" }}
                />
                <Button
                  style={{
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "0.5rem",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={generateRandomName}
                >
                  Generate
                </Button>
              </div>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  marginLeft: "8rem",
                  marginRight: "8rem",
                  marginTop: "1rem",
                }}
              >
                Submit
              </Button>
            </form>
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignInPage;
