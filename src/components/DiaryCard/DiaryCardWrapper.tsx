import { useEffect } from "react";
import DiaryCard from "./DiaryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../redux/reducers/cardReducer";
import './style.css';
interface Card {
  id: string;
  title: string;
  description: string;
}

export default function DiaryCardWrapper({searchText}:{searchText:string}) {

 
  const dispatch = useDispatch();
  const cards: Card[] = useSelector((state: any) => state.cards).filter((card:Card) => card.title.includes(searchText));

  useEffect(() => { 
    dispatch<any>(fetchCards());
  }, [dispatch]);


  return (
    <div
      className='cardContainer'
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
