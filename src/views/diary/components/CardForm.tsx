import { Grid } from "@mui/material";
import { Form } from "formik";
import CardButton from "./CardButton";
import TitleInputField from "./TitleInputField";
import DescriptionInputField from "./DescriptionInputField";

export default function CardForm() {
  return (
    <Form>
      <Grid
        container
        alignItems="start"
        justifyContent="center"
        direction="column"
        rowGap="20px"
        style={{
          width: "95vw",
          backgroundColor: "transparent",
          borderRadius: "12px",
          marginBottom: "50px",
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="row"
          style={{ width: "95vw", backgroundColor: "transparent" }}
        >
          <Grid item xs={11}>
            <TitleInputField />
          </Grid>
          <Grid item xs={1}>
            <CardButton />
          </Grid>
        </Grid>
        <DescriptionInputField />
      </Grid>
    </Form>
  );
}
