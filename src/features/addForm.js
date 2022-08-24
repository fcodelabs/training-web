import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { postAdded } from "./TodoSlice";
import { nanoid } from "@reduxjs/toolkit";
import "./addForm.css";
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setDescription(e.target.value);
  const onSavePostClicked = () => {
    if (title && description) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          description,
        })
      );
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dear Diary
          </Typography>
          <Stack direction="row" spacing={2}>
            <SearchIcon />
            <CircleNotificationsIcon />

            <AccountCircleIcon />
          </Stack>
        </Toolbar>
      </AppBar>
      <div>
        <form>
          <div className="textBar">
            <TextField
              value={title}
              onChange={onTitleChanged}
              fullWidth
              id="outlined-basic"
              label="Title"
              variant="outlined"
              required
            />
          </div>

          <div className="textBar2">
            <TextField
              value={description}
              onChange={onContentChanged}
              fullWidth
              multiline
              rows={4}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              required
            />
          </div>
          <Button type="submit" onClick={onSavePostClicked} variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddPostForm;
