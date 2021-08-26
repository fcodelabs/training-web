import React from "react";
import DiaryCard from "./DiaryCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

/*Styles*/
const useStyles = makeStyles({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  container: {
    width: "95%",
    left: 0,
    right: 0,
    margin: "auto",
  },
});

function DiaryCardContainer({ tempData }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        {tempData.map((data) => {
          return (
            <Grid item md={3} key={data.title}>
              <DiaryCard
                title={data.title}
                subtitle="Noah"
                description={data.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default DiaryCardContainer;
