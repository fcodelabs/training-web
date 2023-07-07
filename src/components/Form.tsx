import Box from '@mui/material/Box';
import {Container,TextField,Button} from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import  React  from "react";
import { useState } from 'react';


const Form = () => {
    const textStyles = {
        padding:"5px",
        width:"80vw",
        height:"40px",
        borderRadius:"30px",
        marginTop:"10px",
        marginRight:"30px"
      }

    return(
       
        <Container sx={{ bgcolor: '#cfe8fc', height: '100vh'}} >
          <TextField InputProps={{style:textStyles}} variant="outlined" placeholder='Submit New' id="fullWidth" />
          <Button sx={{margin:"10px 20px auto",borderRadius:"30px",width:"150px",bgcolor:"#A0BFE0",color:"#ffffff"}} variant="outlined" type='submit'>Submit</Button>
          {/* <Button variant="contained" type="submit" color="primary" sx={{ margin:"20px auto"}}>SIGN IN</Button> */}
          <Textarea minRows={2} placeholder='Enter Description...' sx={{bgcolor:"#A0BFE0", marginTop:"20px"}} />
        </Container>
     
      )
}

export default Form;