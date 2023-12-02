// Home.tsx

import PrimarySearchAppBar from "../../../components/SearchBar/SearchBar";
import Button from "@mui/material/Button";
import "./Home.css";
import SubmitForm from "../SubmitForm/SubmitForm";
import DiaryCard from "../../../components/DiaryCard/DiaryCard";
import { useState } from "react";

interface Diary {
    title: string;
    body: string;
}

interface HomeProps {
    showForm: boolean;
    reset: () => void;
}

const DiaryCardList: Diary[] = [
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },

];

const Home: React.FC<HomeProps> = ({ showForm, reset }) => {
    const [diaries, setDiaries] = useState<Diary[]>(DiaryCardList);

    return (
        <div className="home-wrapper">
            <div className="home-header">Home</div>
            <div className="home-search">
                <PrimarySearchAppBar />
                <Button className="search-button" onClick={reset}>
                    Submit New
                </Button>
            </div>
            <div className="home-body">
                {diaries.map((diary, key) => (
                    <DiaryCard key={key} diary={diary} />
                ))}
            </div>
            <SubmitForm showForm={showForm} reset={reset} diaries={diaries} setDiaries={setDiaries} />
        </div>
    );
};

export default Home;
