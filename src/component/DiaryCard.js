import React, { useState } from "react";
import PropTypes from "prop-types";
import {Card,  CardActions, CardContent, Typography, Button, Box  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function DiaryCard({ title, subtitle, description }) {
  const classes = useStyles();
  const [showMore, setShowMore] = useState(true);
  const displayDescription =
    description.length > 100
      ? showMore
        ? description.slice(0, 100) + "..."
        : description
      : description;
  const onClick = () => {
    setShowMore(!showMore);
  };
 
  return (
    <Box p={1} >
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography 
          variant="h5" 
          component="h2"
          >
           {title}
          </Typography>
          <Typography
            className={classes.title} 
            color="textSecondary"
            gutterBottom
          >
            {subtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {displayDescription}
          </Typography>
        </CardContent>
        <CardActions>
        {description.length > 100 ? (    
          <Button className={classes.btn}
            text={showMore?"read more":"read less"}
            onClick={onClick}
          />
        ) : (
          ""
        )}
      </CardActions>
      </Card>
    </Box>
  )
}

DiaryCard.defaultProps = {
  title: "",
  subtitle: "",
  description: "",
};
DiaryCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

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

