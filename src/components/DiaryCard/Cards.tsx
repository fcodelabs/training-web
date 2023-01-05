import React, { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { diaryCollectionRef } from "../../utils/firestore-collections";
import SingleCard from "./SingleCard";
import { Grid } from "@mui/material";
import { Container } from "reactstrap";

function Cards() {
  const [diaries, setDiaries] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(diaryCollectionRef, (snapshot) => {
      const diaries = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setDiaries(diaries);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container style={{ padding: "25px" }}>
      <Grid container spacing={2}>
        {diaries.map((diary) => (
          <Grid item md={4} lg={3} xs={12}>
            <SingleCard
              key={diary.id}
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
