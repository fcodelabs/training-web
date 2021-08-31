import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    left: "50%",
    top: "50%",
    transform: `translate(-50%, -50%)`,
  },
}));

export default function ProgressCircular() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <CircularProgress
            size={90}
            thickness={1.5}
            style={{color: "#2b7ab4"}}
        />
      </div>
  );
}
