import React from "react";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./SignIn.css";
import Logo from "./Logo.png";
import { TextField, Button } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";


function SignIn() {
  
  const [nickname, setNickname] = useState("");

  const getRandomElement = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)]; //returns a random element from the array
  }

  const generateRandomNickname = () => {
    // Generate a random nickname from the lists of adjectives and nouns
    const adjectives = ['Funny', 'Clever', 'Swift', 'Happy', 'Mysterious', 'Brave', 'Gentle', 'Silly', 'Daring', 'Lucky'];
    const nouns = ['Fox', 'Rocket', 'Penguin', 'Shadow', 'Whisper', 'Star', 'Captain', 'Jester', 'Phoenix', 'Wizard'];
  
    const adjective = getRandomElement(adjectives);
    const noun = getRandomElement(nouns);
    const randomNickname = `${adjective}${noun}`;
    setNickname(randomNickname); //set the nickname state to the random nickname
  };

  const handleRandomButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); //prevent the form from submitting
    generateRandomNickname();
  };

  return (
    
    <div className="card_div">
      <Card className="card">
      <CardHeader 
      title={
        <Typography variant="h5" className="headingTypography">
          Dear Diary
        </Typography>
      }
      className="header1" 
      avatar={<Avatar alt="Logo" src={Logo} className="logo_image" />}
      >
      </CardHeader>

      <CardContent className="header2">
      <div className="frame">
        <div className="frame1">
        <Typography
              variant="h5"
              className="sign_in_text "
              style={{
                fontFamily: 'Public Sans, sans-serif',
                fontSize: '36px',
                fontWeight: 700,
                lineHeight: '24px', 
                letterSpacing: '0px',
                textAlign: 'center',
                color: '#0092DD',
              }}
            >
              Sign In
            </Typography>
        </div>  
        <div className="frame2">
          <form className="formContainer">
            <div className="frame3">
              <TextField
                label="Your Nickname*"
                variant="outlined"
                fullWidth
                size="small"
                className="nameInput"
                value={nickname}//set the value of the input to the nickname state
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}//set the nickname state to the value of the input

              />
              </div>
              <Button 
              type="submit" 
              variant="contained"
              className="submitButton"
              style={{
                padding: "10px, 20px",
                background: '#0092DD29',
                color: '#0092DD',
              }}
              onClick={handleRandomButtonClick}
              >
                Random
              </Button>
              
              </form>
            
          
          <div className="continue">
          <Button 
            type="button" 
            variant="contained" 
            className="secondButton"
            endIcon={<ArrowForward />}
            >
          Continue
          </Button>
          </div>  
        </div>
      </div>
      </CardContent>
    </Card>
    </div>
  );
}

export default SignIn;