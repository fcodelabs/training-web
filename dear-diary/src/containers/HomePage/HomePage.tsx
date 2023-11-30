import Deardiary from "../../components/DearDiary/DearDiary"
import Profile from "../../components/Profile/Profile";
import Home from "./Home";
import "./HomePage.css"
const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <div className="header-home">
                <Deardiary />
                <Profile />
            </div>
            <div className="home">
                <Home />
            </div>
        </div>

    )
}

export default HomePage;