import React, { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import { GenerateRandomName } from "../../util/generateRandomNameUtil";
import theme from "../../theme/theme";
import { HOME } from "../../util/routesUtil";

const SignInPage = () => {
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(HOME, { state: { name: name } });
  };

  const isSubmitDisabled = name.trim() === "";

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
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
                  onClick={() => setName(GenerateRandomName())}
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
