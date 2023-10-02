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
import theme from "../../theme/theme";

export type DiaryDetail = {
  title: string;
  name: string;
  description: string;
};

const HomePage = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
  const [diaryCards, setDiaryCards] = useState<DiaryDetail[]>([]);

  useEffect(() => {
    setDiaryCards([
      {
        title: "Title",
        name: "Anonymous",
        description: "Description",
      },
      {
        title: "Title",
        name: "Anonymous",
        description: "Description",
      },
      {
        title: "Title",
        name: "Anonymous",
        description: "Description",
      },
      {
        title: "Title",
        name: "Anonymous",
        description: "Description",
      },
    ]);
  }, []);

  const handleSubmit = () => {
    if (title == "" || description == "") {
      alert("Please fill all the fields");
      return;
    }
    setDiaryCards([
      {
        title: title,
        name: localStorage.getItem("username") || "Anonymous",
        description: description,
      },
      ...diaryCards,
    ]);
    setIsFormVisible(false);
    setTitle("");
    setDescription("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box
        sx={{
          mx: 5,
          top: 100,
          zIndex: 100,
          borderRadius: 2,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{ position: "fixed", top: 80, right: 10, zIndex: 100 }}
          onClick={() => setIsFormVisible(!isFormVisible)}
        >
          {isFormVisible ? "Close" : "Add New Card"}
        </Button>

        {isFormVisible && (
          <Card
            elevation={0}
            sx={{
              pt: 8,
              background: "transparent",
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
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="filled"
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
                sx={{ borderRadius: 10, mb: 2 }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Card>
        )}
      </Box>

      <Grid container spacing={2} justifyContent="center" gap={4} pt={10}>
        {diaryCards.map((diaryCard, index) => {
          return (
            <DiaryCard
              key={index}
              title={diaryCard.title}
              name={diaryCard.name}
              description={diaryCard.description}
            />
          );
        })}
      </Grid>
    </ThemeProvider>
  );
};

export default HomePage;
