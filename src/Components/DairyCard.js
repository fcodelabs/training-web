import React, { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    width: 330,
    background: "linear-gradient(75deg , #E58C8A , #FF8E53)",
    wordWrap: "break-word",
    margin: 5,
    minHeight: 240,

    borderRadius: 15,
    color: "white",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  des: {},
});

function DairyCard({ title, subtitle, description }) {
  const [readMore, setReadMore] = useState(true);
  const displayDescription =
    description.length > 20
      ? readMore
        ? description.slice(0, 20) + "..."
        : description
      : description;
  const onClick = () => {
    setReadMore(!readMore);
  };
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <hr />
        <Typography className={classes.pos} color="textSecondary">
          {subtitle}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.des} variant="body2" component="p">
          {displayDescription}
        </Typography>
      </CardContent>

      <CardActions>
        {description.length > 20 ? (
          <Button
            text={readMore ? "read more" : "read less"}
            onClick={onClick}
          />
        ) : (
          ""
        )}
      </CardActions>
    </Card>
  );
}

DairyCard.defaultProps = {
  title: "",
  subtitle: "",
  description: "",
};
DairyCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export default DairyCard;
