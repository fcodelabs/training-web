import React, {useEffect} from "react";
import DiaryCard from "./diary_card/DiaryCard";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";
import ProgressCircular from "../progress_circular/ProgressBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataCaller} from "../../views/home/redux/homeAction";

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

function DiaryCardContainer() {
  const classes = useStyles();

  const cardDetails = useSelector((state) => state.homeReducer.data);
  const isLoading = useSelector((state) => state.homeReducer.loading);

  const dispatch = useDispatch();

  //fetch data from database
  useEffect(() => {
    dispatch(fetchDataCaller());
  }, [dispatch, isLoading]);

  return (
      <Box className={classes.root}>
        {isLoading ? (
            <ProgressCircular/>
        ) : (
            <Grid container spacing={3} className={classes.container}>
              {cardDetails.map((data) => {
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
        )}
      </Box>
  );
}

export default DiaryCardContainer;
