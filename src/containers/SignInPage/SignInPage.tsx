import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "@fontsource/public-sans/";
import RandomNameGenerator from '../../utility/randomNameGenerator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(/bg/bg.png) center center / cover no-repeat;
  overflow: hidden;
`;

const StyledContinueButton = styled(Button)`
&&& {
  font-family: public sans;
  text-transform: none;
  width: 133px;
  height: 38px;
  border-radius: 6px;
  color: white;
  background-color: #0092DD;
  align-self: center;
  margin-top: 15px;
  margin-bottom: 24px;
}
`;

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  margin-left: 10px;
`;

const StyledTitle = styled.span`
  color: #0092DD;
  font-size: 36px;
  font-weight: 700;
  align-content: center;
  line-height: 24px;
  margin-bottom: 24px;
`;

const StyledLogoText = styled.span`
  font-family: public sans;
  text-transform: none;
  color: #4B465C;
  font-size: 24px;
  font-weight: 500; 
  line-height: 24px;
  margin-top: 5px;
`;

const StyledCardBox = styled(Box)`
  background-color: #ffffff;
  width: 742px;
  height: auto;
  display: flex;
  margin: 0 10px;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
`;

const StyledLogoBox = styled(Box)`
  display: flex;
  align-items: flex-start;
  margin-top: 24px;
  margin-left: 24px;
  margin-bottom: 24px;
`;

const StyledInputGrid = styled(Grid)`
  
  align-self: center;
  margin: 0 24px 0 24px;
  width: auto;
  
  
`;

const StyledTextField = styled(TextField)`
&&&{
  width: 395px;
  border-radius: 4px;
  border: 1px;
  color: #DBDADE;
  font-size: 13px;
  line-height: 21px;
  margin-left: 5px;
  margin-right: 16px;
  margin-bottom: 5px;
}`;

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  &&& {
  height: 18px;
  width: 18px;
  margin-left: 10px;
  }
`;

const StyledRandomButton = styled(Button)`
  &&& {
  font-family: public sans;
  text-transform: none;
  width: 104px;
  height: 38px;
  border-radius: 6px;
  color: #0092DD;
  background-color: rgba(0, 146, 221, 0.16);
  align-self: center;
  margin-left: 0px;
  margin-top: 0px;
  font-weight: 500;
  line-height: 18px;
  font-size: 15px;
  padding: 10px 20px 10px 20px;
  
  
  }
`;


const SignIn = () => {

  const [name, setName] = useState(''); // state for name

  const navigate = useNavigate(); // navigate to home page

  const handleContinue = () => {
    // check if name is empty
    if (name === '') {
      toast.error('Please enter your nick name');
      return;
    }
    // If not , navigate to home page
    navigate('/home', { state: { name: name } });
  };

  const randomName = RandomNameGenerator(); // generate random name using utility function

  const generateRandomName = () => {
    // update name state with random name
    setName(randomName);
  };

  return (
    <StyledDiv>
      <StyledCardBox>
        <StyledLogoBox>
          <StyledImg src={'/logo/image1.png'} alt="Logo" />
          <StyledLogoText>Dear Diary</StyledLogoText>
        </StyledLogoBox>
        <StyledTitle>Sign In</StyledTitle>

        <StyledInputGrid>

          <StyledTextField
            
            id="outlined-basic"
            label="Your nickname*"
            variant="outlined"
            size='small'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <StyledRandomButton  variant="contained" onClick={generateRandomName}>
            Random
          </StyledRandomButton>
        </StyledInputGrid>
        <StyledContinueButton variant="contained"
          onClick={handleContinue}>
          Continue
          <StyledArrowForwardIcon/>
        </StyledContinueButton>
        <ToastContainer position="top-right" autoClose={3000} />
      </StyledCardBox>
    </StyledDiv>
  );
};

export default SignIn;
