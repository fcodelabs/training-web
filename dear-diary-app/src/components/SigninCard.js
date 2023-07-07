import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './SigninCard.css';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



// styles loging card components
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));
  


function SigninCard({ pageHandler,nameHandler }) {


    // these are states for our local value
    const [g_Name, setG_Name] = useState('');
    // console.log(g_Name);


    // genarate NickNames in Array

const gName = () => {
    const names = [
      "Name-1",
      "Ravi",
      "Kumar",
      "Sarthial",
      "John",
      "Vicky",
      "Stephen",
      "Ahmed",
      "Menaga",
    ];
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
};

//set to ganerated name to usestate
function g_click() { 
  setG_Name(gName);
  console.log('51',g_Name)
    // nameHandler(g_Name)
}

    
// design component
  return (
    <div className='sign-body'>
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
                  
                  <div>
                      
                  </div>
                  <div></div>

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
                          value={g_Name}
                          onChange={e => setG_Name(e.target.value)}
                      
                      />
                     
                  </Box>
                 
                  <Button onClick={g_click} style={{margin:20}}  variant="contained">Ganerate Name</Button>
          <Button style={{ margin: 20 }} variant="contained" onClick={() => {
            pageHandler()
            nameHandler(g_Name)
            
                  } }>SignIn</Button>
            </Item>
              

            
    </Box>
    </div>
  )
}

export default SigninCard
