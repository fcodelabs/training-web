import styled from 'styled-components';
import ResponsiveAppBar from "../../components/Navbar/Navbar";
import Home from "./Home/Home";
import Skeleton from '@mui/material/Skeleton';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react'
import { watchingCards } from "../../redux/diarycard/diaryCardSlice";
import Notification from '../../components/Notification/Notification';

const Background = styled.div`
    display: flex;
    width: 100%; 
    min-height: 100vh; 
    background-image: url("https://res.cloudinary.com/dzsokhvfq/image/upload/v1703006709/dhbvxtisextdrc9odln0.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 0;
`;

const HomePageWrapper = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const HeaderHome = styled.div`
    z-index: 1;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    width: 100%;
`;

const HomeContainer = styled.div`
    z-index: 1;
    padding: 0 2%;
`;

const HomePage = () => {
    const [showform, setShowform] = useState<boolean>(false);
    const isLoading = useAppSelector((state) => state.diaryCard.isLoading)
    const userName = useAppSelector((state) => state.user.userName)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(watchingCards(userName))

    }, [])

    return (
        <Background>
            <HomePageWrapper>
                {!isLoading ? (
                    <>
                        <HeaderHome>
                            <ResponsiveAppBar />
                        </HeaderHome>
                        <HomeContainer>
                            <Home showform={showform} reset={() => setShowform(!showform )} />
                        </HomeContainer>
                    </>
                ) : (
                    <>
                        <Skeleton animation="wave" width="5%" height="10vh"  style={{ top: "1%", left: "1%", position: "absolute", minWidth:"20vh" }} />
                        <Skeleton animation="wave" width="48%" height="10vh" style={{ top: "10%", left: "1%", position: "absolute",minWidth:"25vh"  }} />
                        <Skeleton animation="wave" width="96%" height="100vh" style={{ top: "0.5%", left: "1%", position: "absolute" }} />
                    </>
                )}
            </HomePageWrapper>
            <Notification/>

        
        </Background>
    );
};

export default HomePage;
