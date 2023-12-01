import PrimarySearchAppBar from "../../../components/SearchBar/SearchBar";
import Button from "@mui/material/Button";
import "./Home.css";
import SubmitForm from "../SubmitForm/SubmitForm";

interface HomeProps {
    showForm: boolean;
    reset: () => void;
}

const Home: React.FC<HomeProps> = ({ showForm, reset }) => (
    <div className="home-wrapper">
        <div className="home-header">Home</div>
        <div className="home-search">
            <PrimarySearchAppBar />
            <Button className="search-button" onClick={reset}>
                Submit New
            </Button>
        </div>
        <div className="home-body"></div>
        {(<SubmitForm showForm={showForm} reset={reset} />
        )}
    </div>
);

export default Home;
