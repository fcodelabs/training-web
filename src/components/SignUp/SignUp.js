import React from "react";
import Box from '@mui/material/Box';
import './SignUp.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function SignUp(){
return(
    <div>
        <Box
      sx={{
        width: 500,
        height: 200,
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: 10,
        color: 'text.secondary',
        opacity: '0.6'
      }}>

        <p className="headertext">SignUp</p>

        <form >
        <TextField
          // required
          id="filled-required"
          label="Name"          
          variant="filled"
          fullWidth
          name='Name'
          type='text'
         

        />
        </form>
        <div>
        <Button sx = {{ m:2}} type = 'submit'>Random</Button>
        <Button type = 'submit'>continue</Button>
        </div>
        </Box>
    

    </div>
)

}

export default SignUp;