import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 175,
    borderRadius: 3,
    borderColor: "#ffffff",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export default function DiaryCard() {
  const classes = useStyles();

  return (
    <Box p={1} bgcolor="background.paper">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Title
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Sub Title
          </Typography>

          <Typography variant="body2" component="p">
            Clarissa is a tragic heroine, pressured by her unscrupulous
            nouveau-riche family to marry a wealthy ...
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.btn} size="small">
            Show More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
