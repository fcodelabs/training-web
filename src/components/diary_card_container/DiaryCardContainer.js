import React, {useEffect, useState} from "react";
import DiaryCard from "./diary_card/DiaryCard";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import firebase from "../../util/firebase";
import {Box} from "@material-ui/core";
import ProgressCircular from "../progress_circular/ProgressBar";

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

  //states
  const [cardDetails, setCardDetails] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //fetch data from database
  function fetchData() {
    const ref = firebase.firestore().collection("DiaryCard");
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCardDetails(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

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
