import styled from 'styled-components';
import ResponsiveAppBar from "../../components/Navbar/Navbar";
import Home from "./Home/Home";
import Skeleton from '@mui/material/Skeleton';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react'
import { watchingCards } from "../../redux/diarycard/diaryCardSlice";

const Background = styled.div`
    display: flex;
    width: 100%; 
    min-height: 100vh; 
    background-image: url("/background.png");
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
    const cards = useAppSelector((state) => state.diaryCard.cards);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(watchingCards())

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
                        <Skeleton animation="wave" width="5%" height="10vh" style={{ top: "1%", left: "1%", position: "absolute" }} />
                        <Skeleton animation="wave" width="48%" height="10vh" style={{ top: "10%", left: "1%", position: "absolute" }} />
                        <Skeleton animation="wave" width="98%" height="100vh" style={{ top: "0.5%", left: "1%", position: "absolute" }} />
                    </>
                )}
            </HomePageWrapper>
        </Background>
    );
};

export default HomePage;
