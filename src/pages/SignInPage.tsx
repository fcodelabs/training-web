import { Grid } from "@mui/material";
import SignIN from "../components/SignIn";




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
        <SignIN/>
      </Grid>
    </Grid>
  );
};

export default SignInPage;
