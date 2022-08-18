import React, { useState } from "react";
import { Paper, TextField, Container, Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DiaryCardBox from "./DiaryCardBox";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AddNewCard = () => {
  const paperStyle = {
    padding: 20,
    height: "100vh",
    width: "175vh",
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleArray, setTitleArray] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    titleArray.push({ name: title, description: description });
    let arr = [...titleArray];
    setTitleArray(arr);

    console.log("arr" + titleArray);
    console.log(title);
    console.log(description);
    console.log(titleArray);
  };

  return (
    <Container>
      <form>
        <Paper elevation={10} style={paperStyle}>
          <div style={{ textAlign: "right" }}>
            <Link to="/">
              <Button
                style={{ alignItems: "left" }}
                variant="contained"
                color="secondary"
              >
                {" "}
                Logout{" "}
              </Button>
            </Link>

            <IconButton
              color="inherit"
              aria-label="notifications"
              alignItems="left"
            >
              <div>
                <NotificationsIcon />
              </div>
            </IconButton>

            <AccountCircleIcon />
          </div>

          <div>
            <h1>Dear Diary</h1>
          </div>

          <TextField
            className="Title"
            style={{ marginRight: "5px", marginBottom: "5px" }}
            id="title"
            label="Title"
            variant="outlined"
            required
            size="small"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          />

          <div>
            <div>
              <TextField
                className="Description"
                // style={{ marginRight: "5px", marginBottom: "5px" }}
                multiline
                rows={4}
                id="description"
                label="Description"
                variant="outlined"
                required
                // size="small"
                fullWidth
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={submitHandler}
              >
                Add
              </Button>
            </div>
          </div>

          <Grid container spacing={2}>
            {titleArray.map((e) => (
              <Grid xs={3}>
                <DiaryCardBox name={e.name} description={e.description} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </form>
    </Container>
  );
};

export default AddNewCard;
