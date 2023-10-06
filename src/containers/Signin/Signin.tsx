import {
  Avatar,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import randomNameGenerate from "../../util/randomNameGenerate";
import { useNavigate } from "react-router-dom";
import { ROUTE_HOME } from "../../util/routes";

export default function Signin() {
  const [nickname, setNickname] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const navigate = useNavigate();

  function clickHandler() {
    setNickname(randomNameGenerate); // set nickname to the value of randomNameGenerate
    setIsDisabled(false); // isDisabled is false
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setNickname(e.target.value); // set nickname to the value of input
    setIsDisabled(e.target.value !== "" ? false : true); // if nickname is not empty, then isDisabled is false
  }

  const continueHandler = () => {
    localStorage.setItem('name', nickname);
    navigate(ROUTE_HOME);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        margin: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "30px",
        backgroundColor: "#F4F2FD",
        opacity: "0.8",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap: "16px",
          margin: "20px 20px 0 20px",
        }}
      >
        <Avatar alt="logo" src={process.env.PUBLIC_URL + "/favicon.ico"} />
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontFamily: "Ubuntu, sans-serif",
            color: "#808080",
            fontWeight: "600",
          }}
        >
          Dear Diary
        </Typography>
      </Container>

      <Typography
        variant="h4"
        align="center"
        sx={{
          fontFamily: "Ubuntu, sans-serif",
          color: "#01ACDC",
          marginBottom: "30px",
          fontWeight: "600",
        }}
      >
        Sign In
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <TextField
          onChange={changeHandler}
          value={nickname}
          size="small"
          label="Your Nickname"
          id="outlined-basic"
          variant="outlined"
          required
        />
        <Button
          onClick={clickHandler}
          size="small"
          variant="contained"
          sx={{
            borderRadius: "20px",
            backgroundColor: "#01ACDC",
            color: "#fff",
            "&:hover": { backgroundColor: "#01ACDC" },
          }}
        >
          Random
        </Button>
      </Container>
      <Button
        disabled={isDisabled}
        size="small"
        variant="contained"
        sx={{
          borderRadius: "10px",
          margin: "20px",
          backgroundColor: "#01ACDC",
          color: "#fff",
          "&:hover": { backgroundColor: "#01ACDC" },
          gap: "10px",
        }}
        onClick={continueHandler}
      >
        Continue
        <ArrowForwardIcon />
      </Button>
    </Card>
  );
}
