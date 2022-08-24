import { Grid } from "@mui/material";
import { Form } from "formik";
import SubmitButton from "./SubmitButton";
import RandomButton from "./RandomButton";
import TextInputField from "./TextInputField";
import { uniqueNamesGenerator, names } from "unique-names-generator";

interface Props {
  dirty: boolean;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean | undefined
  ) => void;
}

export default function SignInForm(props: Props) {
  const { dirty, setFieldValue } = props;

  function setRandomName() {
    const nickName = uniqueNamesGenerator({
      dictionaries: [names],
      length: 1,
    });
    setFieldValue("nickName", nickName);
  }

  return (
    <Form>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        padding="10px"
        style={{
          width: "35vw",
          backgroundColor: "white",
          borderRadius: "12px",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          padding="10px"
          style={{ width: "35vw", backgroundColor: "white" }}
        >
          <Grid item xs={8}>
            <TextInputField />
          </Grid>
          <Grid item xs={4}>
            <RandomButton onClick={setRandomName} />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          padding="10px"
          style={{ backgroundColor: "white" }}
        >
          <SubmitButton disabled={!dirty} />
        </Grid>
      </Grid>
    </Form>
  );
}
