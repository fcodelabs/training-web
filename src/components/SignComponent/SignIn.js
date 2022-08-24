import React, { useState } from "react";
import "./SignIn.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

function SignIn() {
  const [buttonText, setButtonText] = useState();

  const addToDO = () => {
    const names = ["Dalin", "Aranga", "Perera", "Udara", "Amila"];
    const rand = names[(Math.random() * names.length) | 0];
    return rand;
  };

  function handleClick() {
    setButtonText(addToDO());
  }

  return (
    <div className="sign">
      <Card sx={{ maxWidth: 600, maxHeight: 900 }}>
        <div className="card">
          <div>
            <h1 style={{ color: "LightSkyBlue" }}>Dear Diary</h1>
          </div>

          <CardContent>
            <div className="hedear">
              <Typography gutterBottom variant="h5" component="div">
                Sign In
              </Typography>
            </div>

            <div>
              <TextField
                value={buttonText}
                id="outlined-basic"
                placeholder="Your NickName"
                variant="outlined"
                required
              />
              <Button
                onClick={handleClick}
                style={{ margin: 11 }}
                className="btnrandom"
                variant="contained"
              >
                RANDOM
              </Button>
            </div>
          </CardContent>
          <CardActions>
            <div className="btncontunue">
              <Link to="/cart" state={buttonText}>
                <Button variant="contained">CONTINUE</Button>{" "}
              </Link>
            </div>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
