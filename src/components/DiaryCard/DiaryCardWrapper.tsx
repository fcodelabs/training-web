import { useEffect } from "react";
import DiaryCard from "./DiaryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../redux/reducers/cardReducer";

interface Card {
  id: string;
  title: string;
  description: string;
}

export default function DiaryCardWrapper() {

 
  const dispatch = useDispatch();
  const cards: Card[] = useSelector((state: any) => state.cards);

  useEffect(() => {
    dispatch<any>(fetchCards());
  }, [dispatch]);




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
