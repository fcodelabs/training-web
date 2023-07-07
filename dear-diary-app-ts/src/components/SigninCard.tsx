import React, { useState,ReactElement } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ganarateName from "../util/ganarateName";
import { Link } from 'react-router-dom';



// styles loging card components
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));
  


interface SigninCardProps {
  nameHandler: (name: string) => void;
}

function SigninCard({ nameHandler }:SigninCardProps): ReactElement {


    // these are states for our local value
    const [genarateRandomName, setGenarateRandomName] = useState('');
    // console.log(genarateName);



//set to ganerated name to usestate
function g_click() { 
  setGenarateRandomName(ganarateName);
  console.log('51',genarateRandomName)
}

    
// design component
  return (
    <div style={{ marginTop:300, justifyItems:'center'}} className='sign-body'>
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
                          value={genarateRandomName}
                          onChange={e => setGenarateRandomName(e.target.value)}
                      
                      />
                     
                  </Box>
                 
          <Button onClick={g_click} style={{ margin: 20 }} variant="contained">Ganerate Name</Button>
          <Link to="home">
          <Button style={{ margin: 20 }} variant="contained" onClick={() => {
            nameHandler(genarateRandomName)
            
            }}>SignIn</Button>
            </Link>
            </Item>
              

            
    </Box>
    </div>
  )
}

export default SigninCard