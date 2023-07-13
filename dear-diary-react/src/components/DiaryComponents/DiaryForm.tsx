import { Box, TextField, Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../index.css";
import { useDispatch } from "react-redux";
import { addCard, fetchCards } from "./cardSlice";
import { Cards } from "./cardSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import db from "../../firebase";

let count = 1;
export const DiaryForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [showCard, setShowCard] = useState(false);
  const cards = useSelector((state: RootState) => state.card.cards);
  const userName = useSelector((store: RootState) => store.createUser.userName);

  // Fetch cards from Firestore when the component mounts
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (inputValue == "" || inputValue2 == "") return alert("Enter Details");

    const newCard: Cards = {
      id: "",
      title: inputValue,
      description: inputValue2,
      userName: userName,
    };
    dispatch(addCard(newCard));
    setShowCard(true);
    setInputValue("");
    setInputValue2("");
  };

  return (
    <Container maxWidth={false} sx={{}}>
      <Box
        sx={{
          borderRadius: "25px",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <TextField
              label="Submit New"
              value={inputValue}
              onChange={handleChange}
              sx={{
                borderRadius: "30px",
                background:
                  "linear-gradient(to right bottom, #3493eb, #34d0eb)",
                flex: "1",
                marginRight: "10px",
                marginLeft: "20px",
                marginTop: "50px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                },
                "& .MuiInputLabel-root": {
                  borderRadius: "30px",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: "30px",
                marginTop: "50px",
              }}
            >
              Submit
            </Button>
          </div>
          <TextField
            onChange={handleChange2}
            value={inputValue2}
            label="Enter Description"
            inputProps={{
              style: { height: "60px" },
            }}
            sx={{
              borderRadius: "30px",
              background: "linear-gradient(to right bottom, #3493eb, #34d0eb)",
              width: "100%",
              marginTop: "10px",
              borderBlockEndStyle: "hidden",
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px",
              },
              "& .MuiInputLabel-root": {
                borderRadius: "30px",
              },
            }}
          />
        </form>
      </Box>
      <ul className="pizzas">
        {cards.map((card: any) => (
          <RecipeReviewCard
            id=""
            title={card.title}
            description={card.description}
            userName={card.userName}
            key={(count += 1)}
          />
        ))}
      </ul>
    </Container>
  );
};

export function RecipeReviewCard(props: Cards) {
  const [showDescription, setShowDescription] = useState(false);
  const handleShowMore = () => {
    setShowDescription(!showDescription);
  };

  const subtitle = props.userName;
  const description = props.description; // Replace with balance description

  const displayedDescription = showDescription
    ? description
    : description.slice(0, 100);

  const buttonText = showDescription ? "Hide" : "Show More";

  return (
    <Card
      sx={{
        maxWidth: 375,
        borderRadius: "15px",
        backgroundColor: "#42cef5",
        opacity: 0.9,
      }}
    >
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {props.title}
        </Typography>
        <Typography
          sx={{ fontSize: 14, opacity: 0.6 }}
          component="div"
          gutterBottom
        >
          {subtitle}
        </Typography>
        <Typography variant="body2">
          {displayedDescription}
          {!showDescription && description.length > 100 && "..."}
        </Typography>

        <Button onClick={handleShowMore} sx={{ mt: 1, fontSize: 12 }}>
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
