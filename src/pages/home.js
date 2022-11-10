import DiaryCard from "../components/DiaryCard";
import Form from "../components/Form";
import { useSelector } from "react-redux";
import { selectDiaryCards } from "../slices/diaryCardSlice";

export default function Home() {
  const diaryCards = useSelector(selectDiaryCards);

  return (
    <div>
      <Form />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {diaryCards.map((diaryCard, i) => (
          <DiaryCard
            key={diaryCard.key}
            title={diaryCard.title}
            name={diaryCard.nickname}
            description={diaryCard.description}
          />
        ))}
      </div>
    </div>
  );
}
