import React from "react";
import SingleCard from "./SingleCard";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container } from "reactstrap";
import { useSelector } from "react-redux";
import "./DiaryCard.css";

function Cards() {
  const diaries = useSelector((state: any) => state.diary.diaries);
  const isloading = useSelector((state: any) => state.diary.isloading);

  if (isloading) {
    return (
      <Box sx={{ justifyContent: "center", display: "flex", p: 30 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container className="cards-container">
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
