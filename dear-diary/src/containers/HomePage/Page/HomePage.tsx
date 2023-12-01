import Deardiary from "../../../components/DearDiary/DearDiary"
import ResponsiveAppBar from "../../../components/Navbar/Navbar";
import Profile from "../../../components/Profile/Profile";
import Home from "../Homebody/Home";
import "./HomePage.css"
const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <div className="header-home">
                <ResponsiveAppBar/>
            </div>
            <div className="home">
                <Home />
            </div>
        </div>

    )
}

export default HomePage;