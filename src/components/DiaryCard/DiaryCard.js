import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShowMoreText from "react-show-more-text";
import "./diaryCard.css";

const DiaryCard = ({ cardData }) => {
  return (
    <Card
      className="card-container"
      style={{ backgroundColor: cardData.color }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {cardData.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {cardData.subtitle}
        </Typography>

        <Typography variant="body2">
          <ShowMoreText
            width={200}
            more={
              <CardActions>
                <Button size="small">SHOW MORE</Button>
              </CardActions>
            }
            less={
              <CardActions>
                <Button size="small">SHOW LESS</Button>
              </CardActions>
            }
          >
            {cardData.description}
          </ShowMoreText>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DiaryCard;
