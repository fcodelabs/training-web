import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import CardActions from "@mui/material/CardActions";

export default function cart(props) {
  const [DescriptionBody, setDescriptionBody] = useState(
    props.description.length > 100
      ? props.description.slice(0, 100) + "....."
      : props.description
  );
  const [moreShown, setMoreShown] = useState(false);
  const onSeeMoreClick = () => {
    if (moreShown && props.description.length > 100) {
      setDescriptionBody(props.description.slice(0, 100) + "...");
    } else setDescriptionBody(props.description);
    setMoreShown(!moreShown);
  };

  return (
    <Card sx={{ m: 2, width: "250px", hight: "auto" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" md={5}>
            {props.title}
          </Typography>
          <Typography variant="body1">{props.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {DescriptionBody}
          </Typography>
          <CardActions>
            <Button onClick={() => onSeeMoreClick()}>
              {props.description.length > 100
                ? moreShown
                  ? "See Less"
                  : "See More"
                : ""}
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
