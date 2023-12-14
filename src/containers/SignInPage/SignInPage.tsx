import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import logo from '../../assets/image1.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import bgimage from '../../assets/bg.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleContinue = () => {
    if (name === '') {
      alert('Please enter your name');
    } else {
      navigate('/home', { state: { name: name } });
    }
  };

  const generateRandomName = () => {
    const randomString = Math.random().toString(36).substring(7);
    setName(randomString);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    background: `url(${bgimage}) center center / cover no-repeat` }}>
      <Box sx={{ bgcolor: '#ffffff', width: '742px', height: '267px', display: 'flex', margin: '0 10px', flexDirection: "column", borderRadius: '6px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.16)' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', margin: '10px' }}>
          <img src={logo} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '15px', marginLeft: '10px' }} />
          <span style={{ color: "#4B465C", fontSize: "24px", fontWeight: '500', lineHeight: '24px', marginTop: '5px' }}>Dear Diary</span>
        </Box>
        <span style={{ color: "#0092DD", fontSize: "36px", fontWeight: "700", alignContent: "center", lineHeight: "24px", marginBottom: "10px" }}>Sign In</span>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <Box sx={{  alignSelf: 'center', marginTop: '30px' }}>
        {/* <TextField style={{ width: '395px', borderRadius: '4px', border: '1px', color: '#DBDADE' }} id="outlined-basic" label="Your nickname*" variant="outlined" inputProps={{ style: { height: '6px' } }} /> */}
        <TextField
            style={{ width: '395px', borderRadius: '4px', border: '1px', color: '#DBDADE', fontSize: '13px', lineHeight: '21px' }}
            id="outlined-basic"
            label="Your nickname*"
            variant="outlined"
            size='small'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Button style={{ width: '104px', height: '35px', color: '#0092DD', backgroundColor: 'rgba(0, 146, 221, 0.16)', marginLeft: '30px', fontWeight: '500', lineHeight: '18px', fontSize: '15px', padding: '10px 20px 10px 20px' }} variant="contained"
            onClick={generateRandomName}>
            Random
          </Button>
        </Box>
        <Button style={{ width: '133px', height: '38px', borderRadius: '6px', color: 'white', backgroundColor: '#0092DD', alignSelf: 'center', marginTop: '15px' }} variant="contained"
            onClick={handleContinue}>
            Continue
            <ArrowForwardIcon style={{ height: '18px', width: '18px', marginLeft: '10px' }} />
            </Button>
      </Box>
    </div>
  );
};

export default SignIn;
