import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddCardForm from "../components/AddCardForm";
import DiaryCard from "../components/DiaryCard";
import { onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { colRef } from "../services/firebase";
import { diaryActions } from "../redux/diarySlice";

const DiaryHome = () => {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     const unSubDiaries = onSnapshot(colRef, (snapshots) => {
    //         let diaryEntriesFb = [];
    //         snapshots.docs.map((doc) =>
    //             diaryEntriesFb.push({
    //                 // id: doc.id,
    //                 ...doc.data(),
    //             })
    //         );
    //         dispatch(diaryActions.addCard(diaryEntriesFb));
    //         return () => {
    //             unSubDiaries();
    //         };
    //     });
    // }, [dispatch]);

    const params = useParams();
    const diaryItems = useSelector((state) => state.diaryReducer.diaryItems);

    return (
        <div className="DiaryHome">
            <AddCardForm userName={params.userName} />
            <Grid container sx={{ px: "5%" }}>
                {diaryItems.map((card, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <DiaryCard
                            title={card.title}
                            description={card.description}
                            userName={card.userName}
                            backgroundColor={card.backgroundColor}
                        />
                    </Grid>
                ))}
            </Grid>

            <Button
                variant="contained"
                href="/"
                sx={{ float: "right", right: "5%" }}
            >
                Log Out
            </Button>
        </div>
    );
};

export default DiaryHome;
