import ResponsiveAppBar from "../../../components/Navbar/Navbar";
import Home from "../Homebody/Home";
import "./HomePage.css";
import Skeleton from '@mui/material/Skeleton';
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../../redux/store/hooks';
import { useEffect } from 'react'
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../../utilities/firebaseIntegration";
import { addCard, deleteCard, editCard } from "../../../redux/slices/diaryCardSlice";
import { Card } from "../../../redux/slices/diaryCardSlice";


const HomePage = () => {
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const cards = useAppSelector((state) => state.diaryCard.cards);
    const dispatch = useAppDispatch();


    useEffect(() => {
        onSnapshot(collection(db, "diary-cards"), (snapshot) => {
            const updatedData = snapshot.docChanges().map(change => ({
                type: change.type,
                doc: change.doc.data(),
                id: change.doc.id
            }))

            updatedData.forEach((change) => {

                if (change.type === "added") {
                    dispatch(addCard(change.doc as Card))
                }
                if (change.type === "modified") {
                    const card = { id: change.id, ...change.doc.data() }
                    dispatch(editCard(card as Card))
                }
                if (change.type === "removed") {
                    dispatch(deleteCard(change.id))
                }
                if (cards) {
                    setIsLoading(false)
                }
            })
        }
        )

    }, [dispatch, cards])

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
                        width="5%"
                        height="10vh"
                        style={{ top: "1%", left: "1%", position: "absolute" }}
                    />
                    <Skeleton
                        animation="wave"
                        width="48%"
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

