import React, { useState,ReactElement } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import generateName from "../../util/generateName";
import { Link } from 'react-router-dom';


// styles loging card components
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));
  

function SigninCard(): ReactElement {


    // these are states for our local value
    const [generateRandomName, setGenerateRandomName] = useState('');
    // console.log(genarateName);



//set to ganerated name to usestate
function generateNameClick() { 
  setGenerateRandomName(generateName);
  
}

    
// design component
  return (
    <div style={{ justifyItems:'center'}} className='sign-body'>
       <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 600,
          height: 300,
        },
      }}
    >
      
              <Item elevation={6}>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80%' },
                    marginTop:10
                }}
                noValidate
                autoComplete="off"
            >
                      <TextField
                          id="outlined-basic"
                          label="Name"
                          variant="outlined"
                          value={generateRandomName}
                          onChange={e => setGenerateRandomName(e.target.value)}
                      
                      /> 
                  </Box>
                 
          <Button onClick={generateNameClick} style={{ margin: 20 }} variant="contained">Generate Name</Button>
          <Link to="home">
          <Button style={{ margin: 20 }} variant="contained" onClick={() => {
            localStorage.setItem("name",generateRandomName)
            
            }}>SignIn</Button>
            </Link>
            </Item>   
    </Box>
    </div>
  )
}

export default SigninCard
