import React from "react";
import { useState } from "react";
import Background from "../../components/Background/Background";
import "./SignIn.css";
import logo from "./logo.png"
import { Box, Button, TextField, Typography, Card, Container, CardContent} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const randomTextsArray: string[] = [
    "Williams",
    "Jhon",
    "Vihanga",
    "David",
    "Kane",
    "Warner",
    "Kate",
    "Jane",
  ];

const SignIn: React.FC = () => {

  const [text, setText] = useState<string>("");
  const [randomText, setRandomText] = useState<string>("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleRandomButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * randomTextsArray.length);
    setRandomText(randomTextsArray[randomIndex]);
    setText(randomText);
  };

  return (
    <Background>
        <Card className="card-container">
            <CardContent sx={{width: "auto", height: "auto"}}>
            <Box
              display="flex"
              alignItems="center"
              mb={3}
              padding="10px 10px 0px"
              gap="12px"
              flexDirection="row"
            >
              <img src={logo} alt="Logo" style={{ height: '40px', width: '40px', marginRight: '10px' }}/>
              <Typography
                variant="subtitle1"
                color="#4B465C"
                fontFamily="public sans"
                sx={{ width: "642px", height: "24px", fontStyle: "normal", fontWeight: "500", fontSize: "24px", lineHeight: "24px"}}
              >
                Dear Diary
              </Typography>
            </Box>

            <Container maxWidth="sm" sx={{ mb: "10px" }}>
              <Typography
                variant="h4"
                color="#0092DD"
                fontFamily="public sans"
                textAlign="center"
                fontWeight="700"
                fontSize="36px"
              >
                Sign In
              </Typography>
            </Container>

            <Box
              component="form"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="10px 20px"
              gap="12px"
            >
              <TextField variant="outlined" size="small" placeholder="Your Nickname*" 
              sx={{width: '395px', height: '35px', borderRadius: '4px', padding: '7px, 10px, 7px, 10px'}}
              onChange={handleTextChange}
              ></TextField>
              <Button variant="contained" 
                onClick={handleRandomButtonClick}
              sx={{width: '104px', height: '38px', padding:'10px, 20px,10px, 20px', gap: '12px', backgroundColor: 'rgba(0, 146, 221,0.16)', color: "#0092DD"}}>
                Random
              </Button>
            </Box>

            <Box display="flex" justifyContent="center" mt={2}>
                <Button variant="contained" endIcon={<ArrowForwardIcon />} 
                sx={{backgroundColor: '#0092DD', opacity: '65%'}}>
                    Continue
                </Button>
            </Box>

            </CardContent>
        </Card>
    </Background>
  );
};

export default SignIn;
