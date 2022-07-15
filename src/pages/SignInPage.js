import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const SignIn = () => {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/home", { replace: true });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h4" fontWeight={600}>
                        Welcome
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="User Name"
                            name="name"
                            autoComplete="off"
                            autoFocus
                            onChange={handleNameChange}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};
export default SignIn;
