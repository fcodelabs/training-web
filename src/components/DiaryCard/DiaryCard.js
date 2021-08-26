import Card from "@material-ui/core/Card";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import classes from "./DiaryCard.module.css";
import { useState } from "react";

function DiaryCard(props) {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <Card className={classes.main}>
      <CardContent className={classes.card}>
        <Typography
          variant="h4"
          className={classes.cardHeader}
          gutterBottom
          align="center"
        >
          {props.title}
        </Typography>
        <Typography className={classes.subTopic}>{props.author} </Typography>
        <Typography variant="body1">
          {showBtn
            ? props.description
            : props.description.substring(
                0,
                100 || props.description.length()
              ) + "..."}{" "}
        </Typography>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            id="addBTN"
            onClick={() => setShowBtn(!showBtn)}
          >
            {!showBtn ? "READ MORE" : "READ LESS"}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default DiaryCard;
