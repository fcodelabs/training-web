import React from "react";
import DiaryCard from "../components/DiaryCard";
import Form from "../components/Form";
import { selectDiaryCards } from "../slices/diaryCardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaActions } from "../sagas/sagaActions";

export default function Home() {
  const dispatch = useDispatch();
  const diaryCards = useSelector(selectDiaryCards);

  useEffect(() => {
    dispatch({ type: sagaActions.GET_DIARY_CARDS_FROM_FIREBASE });
    console.log(diaryCards);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Form />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {diaryCards.map((card) => (
          <DiaryCard
            key={card.id}
            title={card.diaryCard.title}
            name={card.diaryCard.name}
            description={card.diaryCard.description}
            timestamp={card.diaryCard.timestamp}
          />
        ))}
      </div>
    </div>
  );
}
