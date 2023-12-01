import ResponsiveAppBar from "../../../components/Navbar/Navbar";
import Home from "../Homebody/Home";
import "./HomePage.css";
import Skeleton from '@mui/material/Skeleton';

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            {true ? (
                <><div className="header-home">
                    <ResponsiveAppBar />
                </div><div className="home">
                        <Home />
                    </div></>
            ) : (
                <>
                    <Skeleton
                        animation="wave"
                        width="10%"
                        height="10vh"
                        style={{ top: "1%", left: "1%", position: "absolute" }}
                    />
                    <Skeleton
                        animation="wave"
                        width="98%"
                        height="10vh"
                        style={{ top: "10%", left: "1%", position: "absolute" }}
                    />
                    <Skeleton
                        animation="wave"
                        width="98%"
                        height="100vh"
                        style={{ top: "0.5%", left: "1%", position: "absolute" }}
                    />
                </>
            )}
        </div>
    );
};

export default HomePage;
