import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../components/Background/Background";
import { Box, Button, TextField, Typography, Card, CardContent} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {generateRandomName} from '../../utility/generateRandomName';

const styles = {
  card: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boarderRadius: '6px',
    width: { xs: '90%', md: '742px' },
    height: { xs: 'auto', md: '267px' },
  },
  headingBox:{
    display:"flex",
    alignItems:"center",
    marginBottom: "3px",
    padding:"10px 10px 0px",
    gap:"12px",
    flexDirection:"row" ,
    justifyContent:'flex-start'
  },
  headingLogo: {
    height: '40px',
    width: '40px',
    marginRight: '10px',
  },
  headingTitle: {
    fontFamily:"public sans",
    color:"#4B465C",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    fontSize: { xs: '20px', sm: '24px' },
  },
  title: {
    color:"#0092DD",
    fontFamily:"public sans",
    textAlign:"center",
    fontWeight: '700',
    fontSize: { xs: '30px', sm: '36px' },
    mb: "10px"
  },
  formBox:{
    color:"#0092DD",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    padding:"10px 20px",
    gap:"12px",
    flexDirection: { xs: 'column', sm: 'row' },
  },

  form: {
    outlineColor: '#0092DD',
    width: { xs: '80%', sm: '395px' },
    height: '35px',
    borderRadius: '4px',
    padding: '7px, 10px, 7px, 10px',
    mb: { xs: '10px', sm: '0px' },
  },
  randomButton: {
    width: '104px',
    height: '38px',
    padding:'10px, 20px,10px, 20px',
    gap: '12px',
    backgroundColor: 'rgba(0, 146, 221,0.16)',
    color: "#0092DD",
    '&:hover': {
      color: '#fff',
      backgroundColor: '#0092DD',
      opacity: '65%',
    },
    textTransform: 'none',
  },
  continueButton: {
    backgroundColor: '#0092DD',
    opacity: '65%',
    textTransform: 'none',
  },
}



const SignIn: React.FC = () => {

  const [text, setText] = useState<string>("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleRandomButtonClick = () => {
    setText(generateRandomName);
  };

  const navigate = useNavigate();

  const handleContinueClick = () => {
    if (text.trim() === '') {
      alert('Please enter a nickname');
    } else {
      localStorage.setItem('nickname', text);
      navigate('/home');
    }
  }

  return (
    <Background>
        <Card sx={styles.card}>
            <CardContent>
            <Box sx={styles.headingBox}>
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" style={styles.headingLogo}/>
              <Typography sx={styles.headingTitle}>
                Dear Diary
              </Typography>
            </Box>
              <Typography sx={styles.title}>
                Sign In
              </Typography>

            <Box sx={styles.formBox}>
              <TextField 
                variant="outlined" 
                color="info"
                size="small" 
                placeholder="Your Nickname*" 
                autoComplete="off" 
                spellCheck="false"
                sx={styles.form}
                value={text}
                required
                onChange={handleTextChange}
              ></TextField>
              <Button 
                variant="contained" 
                onClick={handleRandomButtonClick}
              sx={styles.randomButton}>
                Random
              </Button>
            </Box>

            <Box  sx={styles.formBox} >
                <Button variant="contained" 
                endIcon={<ArrowForwardIcon />} 
                onClick={handleContinueClick}
                sx={styles.continueButton}>
                    Continue
                </Button>
            </Box>

            </CardContent>
        </Card>
    </Background>
  );
};

export default SignIn;
