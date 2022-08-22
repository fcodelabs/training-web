import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Image from "../assets/diary.jpg";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
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
  const [user, setUser] = useState<string | null>();
  const [diaryCards, setDiaryCards] = useState<
    { name: any; title: string; description: string }[]
  >([]);

  useEffect(() => {
    const user = window.localStorage.getItem("nickName");
    setUser(user);
  }, []);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
  });

  async function handleSubmit(values: { title: string; description: string }) {
    setDiaryCards((cards) => [
      ...cards,
      { name: user, title: values.title, description: values.description },
    ]);
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
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          {() => <CardForm />}
        </Formik>
      </Grid>
      <Grid container columnSpacing={1}>
        {diaryCards.map((card, index) => (
          <DiaryCard
            key={index}
            name={card.name}
            title={card.title}
            description={card.description}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Diary;
