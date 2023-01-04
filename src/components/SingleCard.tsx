import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

interface Props {
  name: string;
  title: string;
  description: string;
}

function SingleCard(props: Props) {
  const [seeMore, setSeeMore] = React.useState(false);

  const handleClickSee = () => {
    setSeeMore(!seeMore);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.name}
        </Typography>
        {props.description ? (
          seeMore ? (
            <Typography variant="body2">{props.description}</Typography>
          ) : (
            <Typography variant="body2">
              {props.description.slice(0, 100)}...
            </Typography>
          )
        ) : (
          <Typography variant="body2">...</Typography>
        )}
      </CardContent>
      {props.description.length > 100 && !seeMore && (
        <CardActions>
          <Button size="small" onClick={handleClickSee}>
            See More
          </Button>
        </CardActions>
      )}
      {props.description.length > 100 && seeMore && (
        <CardActions>
          <Button size="small" onClick={handleClickSee}>
            See Less
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default SingleCard;
