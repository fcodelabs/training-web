import { addCard } from "../../redux/reducers/cardReducer";
import DiaryCard from "./DiaryCard";
import { useDispatch, useSelector } from "react-redux";
import crypto from "crypto";
import { useId } from "react";
interface Card {
  id: string;
  title: string;
  description: string;
}

export default function DiaryCardWrapper() {

  const cards: Card[] = useSelector((state: any) => state.cards);


  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",

      }}
    >
      {cards.map((card: Card, index) => (
        <DiaryCard
          title={card.title}
          description={card.description}
          key={index}
        />
      ))}
    </div>
  );
}
