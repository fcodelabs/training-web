import PrimarySearchAppBar from "../../../components/SearchBar/SearchBar";
import Button from "@mui/material/Button";
import "./Home.css"

const Home = () => (
    <div className="home-wrapper">
        <div className="home-header">
            Home
        </div>
        <div className="home-search">
               <PrimarySearchAppBar/>
               <Button className="search-button">Submit New</Button>
        </div>
        <div className="home-body">

        </div>

    </div>
)

export default Home;