import React, { useState } from "react";
import { Container, Card, TextField, Typography, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
function Signin() {
  const [nickname, setNickname] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const randomNameGenerate = () => {
    const names = [
      "John",
      "Jane",
      "Alice",
      "Bob",
      "Emma",
      "Michael",
      "Olivia",
      "William",
      "Sophia",
    ];
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
  };

  function clickHandler() {
    setNickname(randomNameGenerate);
    setDisabled(false);
  }
  function changeHandler(event: { target: { value: any } }) {
    console.log("changed");
    console.log(event.target.value);
    setNickname(event.target.value);
    if (event.target.value !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function continueHandler(){
    window.location.href = "/home";
  }
  return (
    <React.Fragment>
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage:
            "linear-gradient(-45deg, #039BE5 0%, #039BE5 33%, #00BCD4 100%);",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            padding: "20px 50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius:'16px'
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#039BE5", marginBottom: "30px" }}
          >
            Sign In
          </Typography>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <TextField
              onChange={changeHandler}
              value={nickname}
              size="medium"
              label="Your Nickname"
              id="outlined-basic"
              variant="outlined"
              required
            />
            <Button
              onClick={clickHandler}
              size="small"
              variant="contained"
              sx={{ marginLeft: "16px", borderRadius: "16px" }}
            >
              Random
            </Button>
          </Container>
          <Button
          onClick={continueHandler}
            disabled={isDisabled}
            size="large"
            variant="contained"
            sx={{ borderRadius: "16px", marginTop: "30px" }}
          >
            Continue <EastIcon />
          </Button>
        </Card>
      </Container>
    </React.Fragment>
  );
}
export default Signin;
