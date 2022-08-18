import { Grid } from "@mui/material";
import SignInForm from "../components/SignInForm";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Image from "../assets/signIn.jpg";

function SignInPage() {
  const navigate = useNavigate();

  async function handleSubmit() {
    navigate("/diary", { replace: true });
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", backgroundImage: `url(${Image})` }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Formik initialValues={{ nickName: "" }} onSubmit={handleSubmit}>
          {({ dirty, setFieldValue }) => (
            <SignInForm dirty={dirty} setFieldValue={setFieldValue} />
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

export default SignInPage;
