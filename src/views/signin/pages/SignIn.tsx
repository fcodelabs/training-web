import { Grid } from "@mui/material";
import SignInForm from "../components/SignInForm";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Image from "../assets/signIn.jpg";
import { useStore } from "react-redux";
import * as actions from "../../../reducer";

function SignInPage() {
  const navigate = useNavigate();
  const store = useStore();

  function handleSubmit(values: { nickName: string }) {
    store.dispatch(actions.addUser({ payload: values.nickName }));
    localStorage.setItem("user", values.nickName);
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
        <Formik
          initialValues={{ nickName: "" }}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ dirty, setFieldValue }) => (
            <SignInForm dirty={dirty} setFieldValue={setFieldValue} />
          )}
        </Formik>
      </Grid>
    </Grid>
  );
}

export default SignInPage;
