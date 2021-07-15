import React, { useEffect } from "react";
import DairyHome from "../Components/DairyHome";
import {  getTasks1 } from "../Action/actions";
import DairyCard from "../Components/DairyCard";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { taskAdded } from "../Action/actions";
import { useSelector, useDispatch } from "react-redux";
function Home({ name }) {
  const dispatch = useDispatch();

  const cards11 = useSelector((state) => state.cards);
  const useStyles = makeStyles({
    root: {
      margin: "auto",
      width: "90%",

      minHeight: "1000px",

      color: "white",
    },
    container: {},
    tasklist: {
      width: "100%",

      minHeight: "100px",
    },
  });

  useEffect(() => {
    dispatch(getTasks1());
  }, []);

  const classes = useStyles();

  const addTask = (task) => {
    dispatch(taskAdded(name, task.title, task.description));
  };
  return (
    <div>
      <div className={classes.root}>
        <DairyHome onAdd={addTask} />
        <div className={classes.tasklist}>
          <h1 className="h1">To do List</h1>
          <Box
            display="flex"
            p={1}
            css={{ minWidth: 500 }}
            m={1}
            flexWrap="wrap"
            className={classes.container}
          >
            {cards11.length > 0 ? (
              cards11.map((card) => (
                <Box p={1}>
                  <DairyCard
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                  />
                </Box>
              ))
            ) : (
              <Box p={1}>
                <DairyCard
                  title="nothing to do list is empty"
                  subtitle="NoBody"
                  description={""}
                />
              </Box>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Home;
