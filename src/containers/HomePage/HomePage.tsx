import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  ThemeProvider,
} from "@mui/material";
import DiaryCard from "../../components/DiaryCard/DiaryCard";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { diaryCardActions } from "../../redux/diaryCard/diaryCardSlice";
import { showToast } from "../../utils/notificationUtil";
import { backgroundColor } from "../../theme/colors";

interface IDiaryData {
  title: string;
  username: string;
  description: string;
}

export type DiaryDetail = {
  title: string;
  name: string;
  description: string;
};

const HomePage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const diaryCards: IDiaryData[] = useSelector(
    (state: RootState) => state.diaryCardList.diaryCardList
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(diaryCardActions.fetchDiaryCardList());
  }, [dispatch]);

  const addNewCard = (): void => {
    if (title === "" || description === "") {
      showToast("Please fill all the fields..!");
      return;
    }
    try {
      dispatch(
        diaryCardActions.addDiaryCard({
          title: title,
          description: description,
          username: localStorage.getItem("username") || "Anonymous",
        })
      );
      showToast("Diary Card Added Successfully..!");
    } catch (error) {
      showToast("Something went wrong..!");
      console.log(error);
    }
    setTitle("");
    setDescription("");
    setIsFormVisible(false);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          top: 100,
          zIndex: 100,
          borderRadius: 2,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{ position: "fixed", top: 80, right: 10, zIndex: 100 }}
          onClick={() => {
            setIsFormVisible(!isFormVisible);
            window.scrollTo(0, 0);
          }}
        >
          {isFormVisible ? "Close" : "Add New Card"}
        </Button>

        {isFormVisible && (
          <Card
            elevation={0}
            sx={{
              pt: 8,
              background: backgroundColor,
            }}
          >
            <Grid
              container
              spacing={2}
              pt={4}
              px={5}
              justifyContent="center"
              gap={4}
            >
              <TextField
                id="standard-basic"
                label="Title"
                variant="filled"
                color="secondary"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="filled"
                color="secondary"
                rows={4}
                multiline
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                sx={{ mb: 2 }}
                onClick={() => addNewCard()}
              >
                Submit
              </Button>
            </Grid>
          </Card>
        )}
      </Box>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        gap={4}
        minHeight={"100vh"}
        pt={10}
        sx={{ background: backgroundColor }}
      >
        {diaryCards.map((diaryCard, index) => {
          return (
            <DiaryCard
              key={index}
              title={diaryCard.title}
              name={diaryCard.username}
              description={diaryCard.description}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default HomePage;
