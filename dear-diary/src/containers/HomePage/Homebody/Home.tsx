import PrimarySearchAppBar from "../../../components/SearchBar/SearchBar";
import Button from "@mui/material/Button";
import "./Home.css";
import SubmitForm from "../SubmitForm/SubmitForm";
import DiaryCard from "../../../components/DiaryCard/DiaryCard";

const DiaryCardList = [
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's conten,and make up the bulk of the card's contentt,and make up the bulk of the card's content,and make up the bulk of the card's content,and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's conten,and make up the bulk of the card's contentt,and make up the bulk of the card's content,and make up the bulk of the card's content,and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's conten,and make up the bulk of the card's contentt,and make up the bulk of the card's content,and make up the bulk of the card's content,and make up the bulk of the card's content" },
    { title: "Card Title", body: "Some quick example text to build on the card title and make up the bulk of the card's content" },

]

interface HomeProps {
    showForm: boolean;
    reset: () => void;
}

const Home: React.FC<HomeProps> = ({ showForm, reset }) => (

    <div className="home-wrapper">
        <div className="home-header">Home
        </div>
        <div className="home-search">
            <PrimarySearchAppBar />
            <Button className="search-button" onClick={reset}>
                Submit New
            </Button>
        </div>
        <div className="home-body" >

            {DiaryCardList.map((diary, key) => (
                <DiaryCard key={key} diary={diary} />
            ))}

        </div>
        {(<SubmitForm showForm={showForm} reset={reset} />
        )}
    </div>
);

export default Home;
