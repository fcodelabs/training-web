import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux/es/exports";
import AddCardForm from "../components/AddCardForm";
import DiaryCard from "../components/DiaryCard";
import { selectDiaryItems } from "../redux/diarySlice";

const DiaryHome = () => {
    //logged user name
    const userName = "Owin";

    const diaryItems = useSelector(selectDiaryItems);

    return (
        <div className="DiaryHome">
            <AddCardForm userName={userName} />
            <Grid container sx={{ px: "5%" }}>
                {diaryItems.map((card, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <DiaryCard
                                title={card.title}
                                description={card.description}
                                userName={card.userName}
                                backgroundColor={card.backgroundColor}
                            />
                        </Grid>
                    );
                })}
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
