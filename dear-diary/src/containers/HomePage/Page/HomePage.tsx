import ResponsiveAppBar from "../../../components/Navbar/Navbar";
import Home from "../Homebody/Home";
import "./HomePage.css";
import Skeleton from '@mui/material/Skeleton';
import { useState } from "react";
import { fetchCards } from '../../../redux/slices/diaryCardSlice';
import { useAppDispatch,useAppSelector } from '../../../redux/store/hooks';
import { useEffect } from 'react'


const HomePage = () => {
    const [showForm, setShowForm] = useState(false);
    const isLoading = useAppSelector((state) => state.diaryCard.isloading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCards())
    }, [])

    return (
        <div className="homepage-wrapper">
            {!isLoading ? (
                <>
                    <div className="header-home">
                        <ResponsiveAppBar />
                    </div>
                    <div className="home">
                        <Home showForm={showForm} reset={() => setShowForm(!showForm)} />
                    </div>
                </>
            ) : (
                <>
                    <Skeleton
                        animation="wave"
                        width="100%"  // Adjusted width
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

