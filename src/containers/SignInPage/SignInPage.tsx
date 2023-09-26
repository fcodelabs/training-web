import {
  Button,
  Card,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { generateRandomName } from "../../utils/RandomNameUtil";
import theme from "../../theme/theme";
import { backgroundColor } from "../../theme/colors";
import { BsArrowRight } from "react-icons/bs";

const SignInPage = () => {
  const [name, setName] = useState<string>("");

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        height={"100vh"}
        sx={{ background: backgroundColor }}
      >
        <Grid item xs={12} sm={6} md={5} lg={4}>
          <Card sx={{ px: 10, py: 5, borderRadius: 10 }}>
            <Grid container rowGap={2} justifyContent={"center"}>
              <Typography variant="h4" color={"secondary"}>
                Dear Diary
              </Typography>
              <TextField
                id="standard-basic"
                label="Nick Name"
                variant="filled"
                fullWidth
                color="secondary"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setName(generateRandomName())}
                sx={{ borderRadius: 10 }}
              >
                RANDOM
              </Button>
              <Link to={`/home`} style={{ width: "100%" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  sx={{ borderRadius: 10 }}
                  disabled={name.length === 0}
                  onClick={() => localStorage.setItem("username", name)}
                >
                  Continue
                  <BsArrowRight size={20} />
                </Button>
              </Link>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInPage;
