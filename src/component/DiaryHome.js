import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {TextField,Button, TextareaAutosize, Box } from "@material-ui/core";

const DiaryHome = ({ onAdd }) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [add, setAdd] = useState(false);
  const onClick = (e) => {
    e.preventDefault();
    if (!title) {
      console.log("Missing Title");
      alert("Missing Title");
      return;
    }
    if (!description) {
      alert("Missing Description");
      console.log("Missing Description");
      return;
    }
    onAdd({ title, description });
    setAdd(false);
    setDescription("");
    setTitle("");
  };

  
  return (
    <div className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
        <Box m={2} pt={2}  flexDirection="column">
        <TextField
          id="standard-basic"
          placeholder="Submit New"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => {
            setAdd(true);
          }}
        />
        </Box>

        <Box m={2} pt={2} flexDirection="column">
        {add && (
          <TextareaAutosize
            className={classes.textArea}
            aria-label="minimum height"
            rowsMin={4}
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        )}
        </Box>

        <Button className={classes.btn} size="small" onClick={onClick} >
          SUBMIT</Button>
      </form>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({  
  root: {
    background: "linear-gradient(50deg ,#ffffff ,#4169e1)",   
    margin: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
  textArea: {
    background: "linear-gradient(50deg ,#ffffff ,#4169e1)",
    borderRadius: 15,
    width: "95%",
  },
  btn: {
    background: "linear-gradient(120deg, #615259 , #975474)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 35,
    padding: "5px 30px",
  },
}));

export default DiaryHome;