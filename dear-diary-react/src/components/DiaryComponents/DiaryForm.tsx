import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../index.css";
import { useDispatch } from "react-redux";
import { addCard } from "../../app/cardSlice";
import { Cards } from "../../app/cardSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import db from "../../firebase";

export const DiaryForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [showCard, setShowCard] = useState(false);
  const cards = useSelector((state: RootState) => state.card.cards);

  const handleChange = (event: { target: { value: any } }) => {
    setInputValue(event.target.value);
  };
  const handleChange2 = (event: { target: { value: any } }) => {
    setInputValue2(event.target.value);
  };
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const newCard: Cards = {
      title: inputValue,
      description: inputValue2,
    };
    dispatch(addCard(newCard));
    setShowCard(true);
    setInputValue("");
    setInputValue2("");
  };

  return (
    <div>
      <Box
        sx={{
          border: 1,
          borderColor: "#3493eb",
          background: "linear-gradient(to right bottom, #3493eb, #34d0eb)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <TextField
              label="Submit New"
              value={inputValue}
              onChange={handleChange}
              sx={{
                flex: "1",
                marginRight: "10px",
                marginLeft: "20px",
                marginTop: "5px",
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
                marginTop: "5px",
              }}
            >
              Submit
            </Button>
          </div>
          <TextField
            onChange={handleChange2}
            value={inputValue2}
            label="Enter Description"
            multiline
            rows={4}
            sx={{ width: "100%", marginTop: "10px" }}
          />
        </form>
      </Box>
      <ul className="pizzas">
        {showCard &&
          cards.map((card: any) => (
            <RecipeReviewCard
              title={card.title}
              description={card.description}
              key={card.title}
            />
          ))}
      </ul>
    </div>
  );
};

export function RecipeReviewCard(props: Cards) {
  const [showDescription, setShowDescription] = useState(false);
  const handleShowMore = () => {
    setShowDescription(!showDescription);
  };

  const subtitle = "Card Subtitle";
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
