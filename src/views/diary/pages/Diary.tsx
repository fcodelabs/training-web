import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { Grid } from "@mui/material";
import Image from "../assets/diary.jpg";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import CardForm from "../components/CardForm";
import DiaryCard from "../components/DiaryCard";
import { State } from "../../../reducer";
import * as actions from "../../../reducer";

const StyledTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  text-align: left;
  letter-spacing: -0.02em;
  color: white;
`;

function Diary() {
  const store = useStore();
  const [diaryCards, setDiaryCards] = useState<
    { name: string; title: string; description: string; created: string }[]
  >([]);

  useEffect(() => {
    store.dispatch({
      type: "getCards",
    });
    store.dispatch(actions.addUser({ payload: localStorage.getItem("user") }));
  }, []);

  useEffect(() => {
    store.subscribe(() => {
      const state = store.getState() as State;
      setDiaryCards(state.cards);
    });
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
  });

  async function handleSubmit(values: { title: string; description: string }) {
    const prevState = store.getState() as State;
    const user = prevState.user;
    store.dispatch({
      type: "addCard",
      payload: {
        name: user,
        title: values.title,
        description: values.description,
        created: new Date(),
      },
    });
    const newState = store.getState() as State;
    const diaryCards = newState.cards;
    setDiaryCards(diaryCards);
  }

  function displayCards(
    diaryCards: { name: string; title: string; description: string }[]
  ) {
    return diaryCards.map((card, index) => (
      <DiaryCard
        key={index}
        name={card.name}
        title={card.title}
        description={card.description}
      />
    ));
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
        {displayCards(diaryCards)}
      </Grid>
    </Grid>
  );
}

export default Diary;
