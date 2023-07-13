import Container from "@mui/material/Container";
import {
  DiaryForm,
  RecipeReviewCard,
} from "../../components/DiaryComponents/DiaryForm";

function DiaryHome() {
  return (
    <Container
      maxWidth={false}
      sx={{
        background: "linear-gradient(to right bottom, #430089, #82ffa1)",
        minHeight: "100vh", // Set the container height to cover the whole viewport vertically
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DiaryForm />
    </Container>
  );
}

export default DiaryHome;
