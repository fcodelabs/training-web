import { useDispatch } from 'react-redux';
import {cardsActions} from '../../redux/cards/cardSlice';
import { useNavigate } from 'react-router-dom';
import React, { useState} from "react";
import { Container, Card, TextField, Typography, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import {randomNameGenerate, routePaths} from '../../utils';

const cardStyles = {
  padding: "20px 50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
};

function SignIn(){

  //initialize dispatch to save user data
  const dispatch = useDispatch();

  // set variables for nickname and disabled state
  const [nickname, setNickname] = useState("");
  const [isDisabled, setDisabled] = useState(true);
  
  const navigate = useNavigate();
  
  // Click event handler for the "Random" button to generate names and activate button
  function clickHandler() {
    setNickname(randomNameGenerate);
    setDisabled(false);
  };

  // Change event handler for the nickname input field
  function changeHandler(event: { target: { value: string } }) {
    setNickname(event.target.value);
    if (event.target.value !== "") {
      setDisabled(false); 
    } else {
      setDisabled(true);
    }
  }

   // event handler for the "Continue" button to set user state and navigate to home page
  function continueHandler(){
    dispatch(cardsActions.saveUser(nickname));
    navigate(routePaths.home); // Redirect to the home page
  }

  return (
    <React.Fragment>
      <Card variant="outlined" sx={cardStyles}>
        <Typography variant="h4" align="center" sx={{ color: "#039BE5", marginBottom: "30px" }}>
          Sign In
        </Typography>
        <Container maxWidth="xl" sx={{display: "flex", alignItems: "end", justifyContent: "center"}}>
          <TextField onChange={changeHandler} value={nickname} size="medium" label="Your Nickname" id="outlined-basic" variant="outlined" required />
          <Button onClick={clickHandler} size="small" variant="contained" sx={{ marginLeft: "16px", borderRadius: "16px" }}>
            Random
          </Button>
        </Container>
        <Button onClick={continueHandler} disabled={isDisabled} size="large" variant="contained" sx={{ borderRadius: "16px", marginTop: "30px" }} >
          Continue <EastIcon />
        </Button>
      </Card>
    </React.Fragment>
  );
}
export default SignIn;
