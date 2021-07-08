import "./App.css";

import DairyHome from "./Components/DairyHome";
import { useState } from "react";
import DairyCard from "./Components/DairyCard";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { useSelector, useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  const cards1 = useSelector((state) => state.cards);

  const classes = useStyles();

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    console.log(task);
    dispatch({
      id: id,
      type: "ADD_NEW",
      subtitle: task.subtitle,
      title: task.title,
      description: task.description,
    });
  };
  return (
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
          {cards1.length > 0 ? (
            cards1.map((card) => (
              <Box p={1}>
                <DairyCard
                  title={card.title}
                  subtitle="dumindu"
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
  );
}
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

export default App;
