import { useContext } from "react";
import { Grid } from "@mui/material";
import { UserContext } from "../../../App";
import Image from "../assets/diary.jpg";
import styled from "styled-components";
import { Formik } from "formik";
import CardForm from "../components/CardForm";
import DiaryCard from "../components/DiaryCard";

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  text-align: left;
  letter-spacing: -0.02em;
  color: white;
`;

function Diary() {
  const { user } = useContext(UserContext);

  async function handleSubmit() {
    console.log("Yes");
  }

  return (
    <Grid
      container
      alignItems="start"
      justifyContent="start"
      paddingTop="60px"
      paddingX="30px"
      direction="column"
      sx={{ overFlowY: "scroll" }}
      style={{ minHeight: "100vh", backgroundImage: `url(${Image})` }}
    >
      <StyledTitle>Home</StyledTitle>
      <Grid item alignItems="start" justifyContent="start">
        <Formik
          initialValues={{ title: "", description: "" }}
          onSubmit={handleSubmit}
        >
          {() => <CardForm />}
        </Formik>
      </Grid>
      <DiaryCard
        title="Diary Card"
        name="Anushka"
        description="a demo version of the software I saw a demo on how to use the computer program."
      />
    </Grid>
  );
}

export default Diary;
