import React from "react";
import DiaryCard from "../../components/DiaryCard/DiaryCard";
import Form from "../../components/Form/Form";
import { selectDiaryCards, getDiaryCards } from "./HomeSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";

export default function Home() {
  const dispatch = useDispatch();
  const diaryCards = useSelector(selectDiaryCards);

  useEffect(() => {
    dispatch(getDiaryCards());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Form />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* diaryCards map with unique key */}
        {diaryCards.map((diaryCard) => (
          <Grid key={diaryCard.timestamp} item>
            <DiaryCard
              name={diaryCard.name}
              title={diaryCard.title}
              description={diaryCard.description}
            />
          </Grid>
        ))}
      </div>
    </div>
  );
}
