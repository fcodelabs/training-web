import { Grid } from "@mui/material";
import SignIn from "../../Components/SignIn";

const SignInPage = () => {
  return (
    <Grid
      container
      display="flex"
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid item>
        <SignIn />
      </Grid>
    </Grid>
  );
};

export default SignInPage;
