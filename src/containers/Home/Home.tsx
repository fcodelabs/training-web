import { Box, Button, Card, Container, TextField } from "@mui/material";
import DiaryCard from "../../components/DiaryCard";
import { useState } from "react";
import { DiaryData } from "../../types/DiaryCardData";

export default function Home() {
  const name = localStorage.getItem("name");
  const [userName] = useState<string>(name || "");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [diaryList, setDiaryList] = useState<DiaryData[]>([]);
  
  function onchangeTitle(e: any) {
    setTitle(e.target.value);
  }

  function onchangeMessage(e: any) {
    setMessage(e.target.value);
  }

  function submitHandler(e: any) {
    e.preventDefault();
    setDiaryList((prevState) => [
      ...prevState,
      {
        title: title,
        username: userName,
        description: message,
      },
    ]);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        height: "100vh",
        width: "100vw",
        margin: "25px 0px 0px 0px",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          margin: "25px",
          display: "flex",
          flexDirection: "column",
          borderRadius: "30px",
          backgroundColor: "#F4F2FD",
          opacity: "0.7",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          "@media (max-width: 768px)": {
            width: "calc(100vw - 50px)",
          },
          "@media (max-width: 1496px)": {
            width: "calc(100vw - 110px)",
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            margin: "25px 0px 25px 0px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            "@media (max-width: 1024px)": {
              flexWrap: "wrap",
            },
          }}
        >
          <TextField
            onChange={onchangeTitle}
            value={title}
            size="small"
            label="Submit Title"
            required
            fullWidth
            InputProps={{ sx: { borderRadius: "20px" } }}
            variant="outlined"
            sx={{
              backgroundColor: "rgba(1, 172, 220, 0.2)",
              borderRadius: "20px",
              outline: "none",
              outlineColor: "none",
              width: "90vw",
              "@media (max-width: 1024px)": {
                width: "90vw",
                justifyContent: "center",
              },
            }}
          />
          <Button
            onClick={submitHandler}
            size="small"
            variant="contained"
            sx={{
              borderRadius: "10px",
              backgroundColor: "#01ACDC",
              color: "#fff",
              "&:hover": { backgroundColor: "#01ACDC" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "end",
              width: "8vw",
              "@media (max-width: 768px)": {
                width: "90vw",
                justifyContent: "center",
              },
            }}
          >
            Submit
          </Button>
        </Container>
        <TextField
          onChange={onchangeMessage}
          value={message}
          size="small"
          InputProps={{ sx: { borderRadius: "20px" } }}
          multiline
          rows={4}
          label="Enter Description"
          variant="outlined"
          required
          contentEditable={true}
          sx={{
            margin: "0px 25px 25px 25px",
            width: "calc(100% - 50px)",
            borderRadius: "20px",
            backgroundColor: "rgba(1, 172, 220, 0.2)",
          }}
        ></TextField>
      </Card>

      <Container
        maxWidth="xl"
        sx={{
          overflowY: "auto",
          maxHeight: "60vh",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          "@media (max-width: 1440px)": {
            maxHeight: "40vh",
          },
          "@media (max-width: 1024px)": {
            maxHeight: "30vh",
          },
          "&::-webkit-scrollbar": {
            width: "12px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "6px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "rgba(0, 0, 0, 0.4)",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(0, 0, 0, 0.1)",
          },
          "@media (max-width: 425px)": {
            "&::-webkit-scrollbar": {
              width: "6px",
            },
          },
        }}
      >
        <DiaryCard
          title="Sample Title"
          name="Sample Name"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lacus id augue ultrices, convallis lacinia neque facilisis. Phasellus ac dolor diam. Nam eros erat, consectetur ut feugiat nec, consectetur ut quam. Orci varius"
        />
        <DiaryCard
          title="Sample Title"
          name="Sample Name"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lacus id augue ultrices, convallis lacinia neque facilisis. Phasellus ac dolor diam. Nam eros erat, consectetur ut feugiat nec, consectetur ut quam. Orci varius"
        />
        <DiaryCard
          title="Sample Title"
          name="Sample Name"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lacus id augue ultrices, convallis lacinia neque facilisis. Phasellus ac dolor diam. Nam eros erat, consectetur ut feugiat nec, consectetur ut quam. Orci varius Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lacus id augue ultrices, convallis lacinia neque facilisis. Phasellus ac dolor diam. Nam eros erat, consectetur ut feugiat nec, consectetur ut quam. Orci varius"
        />
        <DiaryCard
          title="Sample Title"
          name="Sample Name"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lacus id augue ultrices, convallis lacinia neque facilisis. Phasellus ac dolor diam. Nam eros erat, consectetur ut feugiat nec, consectetur ut quam. Orci varius"
        />
        <DiaryCard
          title="Sample Title"
          name="Sample Name"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lacus id augue ultrices, convallis lacinia neque facilisis. Phasellus ac dolor diam. Nam eros erat, consectetur ut feugiat nec, consectetur ut quam. Orci varius"
        />
      </Container>
    </Box>
  );
}
