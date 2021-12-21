import './sign.scss';
import { Button, CssBaseline } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from "@material-ui/core/Card";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@material-ui/core';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const SignIn = (props) => {
    const[subTitle,setSubTitle]=React.useState('');
   
    

    const handleOnSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("subTitle",subTitle);
        window.location.replace('/home');
       
        
      };

      var Names=['Noah','Liam','Ivan','Anne','Benjamin'];

      const getSubTitle=(e)=>{
        const randomName=(Names[Math.floor(Math.random()*Names.length)]);
        setSubTitle(randomName);
        
      }

    return(
      <div><br/><br/><br/><br/>
        <Grid align="center">
          <h4 style={{color:"white"}}>Dear Diary</h4>
        </Grid>
        <Grid align="center" justify="center">
        <Card className='frame' style={{width:700, borderRadius:"20px"}}>
          <div className='title'> <Box sx={{ color: 'info.main' }}><h1>Sign In</h1></Box></div>
            <form className="signin-form" onSubmit={handleOnSubmit}>
              <div>
                <TextField sx={{ m: 1,width:'40ch' }}
                  required
                  id="outlined-required"
                  label="Your Nickname"
                  type="text"
                  value={subTitle}
                  onChange={(e)=>setSubTitle(e.target.value)}/>
                <Button 
                onClick={getSubTitle}
                variant="contained" sx={ { borderRadius: 28,m:1} }>
                  Random
                </Button>
              </div>
              <div>
                  <br/>
                  <Button variant="contained" disabled={!subTitle} type="submit" size="medium" sx={ { borderRadius: 28,m:1} } endIcon={<ArrowForwardIcon />} >
                  CONTINUE
                  </Button>
                  <br/>
              </div>
              
           </form>
            <br/>
        </Card>
        </Grid>
      </div>
);
    
};

  

 export default SignIn;




       
