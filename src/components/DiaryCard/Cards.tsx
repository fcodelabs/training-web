import React from "react";
import SingleCard from "./SingleCard";
import { Grid } from "@mui/material";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";

function Cards() {
  const diaries = useSelector((state: any) => state.diary.diaries);

  return (
    <Container style={{ padding: "25px" }}>
      <Grid container spacing={2}>
        {diaries.map((diary: any) => (
          <Grid item md={4} lg={3} xs={12} key={diary.id}>
            <SingleCard
              name={diary.data.name}
              title={diary.data.title}
              description={diary.data.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cards;
