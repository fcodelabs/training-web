import React, { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import DiaryCard from '../../components/DiaryCard/DiaryCard';

//add css to textField
const rounded = {
  borderRadius: "20px",
  height: "43px",
  width: "70vw",
  marginRight: "10px",
};

function DiaryHome() {
  //set variables to textfields' values states
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  //onclick listenere to get textfields value when click on submit button
  function formSubmitHandler() {
    console.log(title);
    console.log(message);
    setTitle("");
    setMessage("");
  }

  //update input value with userState
  function onchangeTitle(event: { target: { value: any } }) {
    setTitle(event.target.value);
  }

  //update input value with userState
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
          onClick={formSubmitHandler}
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
      <Container maxWidth="xl" sx={{display:"flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        <DiaryCard title="Sample Title" subTitle="sub title" description="description"/>
        <DiaryCard title="Sample Title" subTitle="sub title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lacus id augue ultrices, convallis lacinia neque facilisis. Phasellus ac dolor diam. Nam eros erat, consectetur ut feugiat nec, consectetur ut quam. Orci varius"/>
        <DiaryCard title="Sample Title" subTitle="sub title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lacus id augue ultrices, convallis lacinia neque facilisis. Phasellus ac dolor diam. Nam eros erat, consectetur ut feugiat nec, consectetur ut quam. Orci varius Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lacus id augue ultrices, convallis lacinia neque facilisis. Phasellus ac dolor diam. Nam eros erat, consectetur ut feugiat nec, consectetur ut quam. Orci varius"/>
        <DiaryCard title="Sample Title" subTitle="sub title" description="description"/>
        <DiaryCard title="Sample Title" subTitle="sub title" description="description"/>
      </Container>
    </React.Fragment>
  );
}
export default DiaryHome;
