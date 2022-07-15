import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { addUserName } from "../redux/diarySlice";

const SignIn = () => {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUserName(userName));
        navigate("/home", { replace: true });
    };

    return (
        <Container component="main" maxWidth="xs">
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
                        disabled={userName === ""}
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
    );
};
export default SignIn;
