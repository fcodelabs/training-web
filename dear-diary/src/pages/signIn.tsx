import React, { useEffect } from "react";
import Card from "../components/common/card";
import { faker } from "@faker-js/faker";
import { Button, Input, Typography } from "@mui/material";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserName } from "../store/action";
import "./pages.css";

type Props = {};

function SignIn({}: Props) {
  const [name, setName] = React.useState<string>("");
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    setName(faker.person.firstName().toUpperCase());
  }, []);

  function generateName() {
    setName(faker.person.firstName().toUpperCase());
  }

  function submitHandler() {
    dispatch(setUserName(name));
    // route to home
    history("/home");
  }

  return (
    <div className="signin-container">
      <Typography
        mb={10}
        color="#f44336"
        style={{
          fontSize: "4rem",
          fontFamily: "Verdana",
          fontWeight: "bold",
        }}
      >
        Hello 👋 {name}
      </Typography>
      <Card>
        <Input
          placeholder="Type Nickname"
          value={name}
          onClick={() => setName("")}
          onChange={(e) => setName(e.target.value.toUpperCase())}
          inputProps={{ style: { fontWeight: "bold" } }}
        />
        <Button
          variant="contained"
          onClick={() => {
            generateName();
          }}
          style={{
            margin: "10px",
          }}
        >
          <ShuffleOnIcon style={{ color: "wheat" }} />
        </Button>
        <Button variant="contained" color="primary" onClick={submitHandler}>
          🚀 Start
        </Button>
      </Card>
    </div>
  );
}

export default SignIn;
