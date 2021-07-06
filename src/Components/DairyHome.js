import React, { useState } from "react";
import { Save } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "./Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
const useStyles = makeStyles((theme) => ({
  root: {},
  root1: {
    background: "linear-gradient(45deg , #FE6B8B , #FF8E53)",
    border: 0,
    margin: 15,

    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
  textArea1: {
    background: "linear-gradient(45deg , #FE6B8B , #FF8E53)",
    width: "95%",
  },
}));

const DairyHome = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [add, setAdd] = useState(false);
  const [description, setDescription] = useState("");
  const onClick = (e) => {
    console.log("title=" + title + " description=" + description);
    e.preventDefault();
    if (!title) {
      console.log("missing title");
      alert("missing title");
      return;
    }
    if (!description) {
      alert("missing discription");
      console.log("missing discription");
      return;
    }
    onAdd({ title, description });
    setAdd(false);

    setDescription("");

    setTitle("");
  };
  const classes = useStyles();
  return (
    <div className={classes.root1}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => {
            setAdd(true);
          }}
        />

        <br />

        <br />
        <label />
        {add && (
          <TextareaAutosize
            className={classes.textArea1}
            aria-label="minimum height"
            rowsMin={8}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        )}

        <br />
        <Button
          color="green"
          text="submit"
          onClick={onClick}
          startIcon={<Save />}
        />
      </form>
    </div>
  );
};

export default DairyHome;
