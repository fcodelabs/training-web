import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function RecipeReviewCard() {
  const [showDescription, setShowDescription] = useState(false);

  const handleShowMore = () => {
    setShowDescription(!showDescription);
  };

  const title = "Title";
  const subtitle = "Card Subtitle";
  const description =
    "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."; // Replace with your balance description

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
          {title}
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
