import styled from 'styled-components';
import ResponsiveAppBar from "../../components/Navbar/Navbar";
import Home from "./Home/Home";
import Skeleton from '@mui/material/Skeleton';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../config/firebaseIntegration";
import { Card } from "../../redux/diarycard/diaryCardSlice";
import { Background } from "../../components/Layout/Layout";

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
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const cards = useAppSelector((state) => state.diaryCard.cards);
    const dispatch = useAppDispatch();

    useEffect(() => {
        onSnapshot(collection(db, "diary-cards"), (snapshot) => {
            const updatedData = snapshot.docChanges().map(change => ({
                doc: change.doc.data(),
            }))
        
        }

        )
           
            
    
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
                            <Home showForm={showForm} reset={() => setShowForm(!showForm)} />
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
