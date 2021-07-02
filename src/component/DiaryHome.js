import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";

export default function DiaryHome() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const onClick = (e) => {
    console.log("title=" + title + " description=" + description);
    e.preventDefault();
    setTitle("");
    setDescription("");
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Box m={2} pt={2} bgcolor="background.paper" flexDirection="column">
        <TextField
          underlineShow={false}
          color="white"
          id="Title"
          placeholder="Submit New"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          inputStyle={{ color: "white", padding: "0 25px" }}
          style={{ background: "#fed8b1", borderRadius: 25 }}
        />
      </Box>
      <Box m={2} pt={2} bgcolor="background.paper" flexDirection="column">
        <TextareaAutosize
          id="Description"
          label="Description"
          variant="filled"
          color="secondary"
          aria-label="minimum height"
          rowsMin={4}
          placeholder="Enter Description"
          value={description}
          style={{ background: "#fed8b1", borderRadius: 25 }}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Box>
      <Box m={2} pt={2} bgcolor="background.paper" flexDirection="column">
        <Button className={classes.btn} size="small" onClick={onClick}>
          Submit
        </Button>
      </Box>
    </form>
  );
}

const useStyles = makeStyles({
  root: {
    "& > *": {
      width: "200px",
    },
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
