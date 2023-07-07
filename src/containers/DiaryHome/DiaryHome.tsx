import React, { useState } from "react";
import { Button, Container, TextField } from "@mui/material";

const rounded = {
  borderRadius: "20px",
  height: "43px",
  width: "70vw",
  marginRight: "10px",
};

function DiaryHome() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  function formSubmitHnadler() {
    console.log(title);
    console.log(message);
    setTitle("");
    setMessage("");
  }

  function onchangeTitle(event: { target: { value: any } }) {
    setTitle(event.target.value);
  }

  function onchangeMessage(event: { target: { value: any } }) {
    setMessage(event.target.value);
  }
  return (
    <React.Fragment>
      <Container>
        <TextField
          value={title}
          onChange={onchangeTitle}
          placeholder="Enter Title"
          InputProps={{ style: rounded }}
        ></TextField>
        <Button
          onClick={formSubmitHnadler}
          sx={{ width: "10vw" }}
          size="large"
          variant="contained"
        >
          {" "}
          Submit{" "}
        </Button>
        <TextField
          value={message}
          onChange={onchangeMessage}
          InputProps={{ sx: { borderRadius: "20px" } }}
          fullWidth
          multiline
          margin="normal"
          rows={4}
          placeholder="Enter Description"
          variant="outlined"
        ></TextField>
      </Container>
    </React.Fragment>
  );
}
export default DiaryHome;
