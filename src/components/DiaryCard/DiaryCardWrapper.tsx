import { useEffect } from "react";
import DiaryCard from "./DiaryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsRequest } from "../../redux/reducers/cardReducer"; 
import { useTypedSelector } from "../../redux/store/store";

interface Card {
  id: string;
  title: string;
  description: string;
  username: string | null;
}

interface SearchInputProps {
  searchInput: string;
}

export default function DiaryCardWrapper({ searchInput }: SearchInputProps) {

  const dispatch = useDispatch();
  const cards: Card[] = useSelector((state: any) => state.cards);
  const currentUsername = useTypedSelector((state) => state.users.currentUsername);


  useEffect(() => {
    dispatch(fetchCardsRequest());
  }, [dispatch]);

  const filteredCards = cards.filter((card) =>
    card.username === currentUsername &&
    card.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",
      }}
    >
      {filteredCards.map((card: Card, index) => (
        <DiaryCard title={card.title} description={card.description} key={index} />
      ))}
    </div>
  );
  
}