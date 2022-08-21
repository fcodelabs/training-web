import React from "react";
import { Avatar, Grid, Paper } from "@material-ui/core";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import props from 'prop-types';
import {useNavigate} from 'react-router-dom'


const SignIn=()=>{
    const paperstyle={padding: 20,height:'30vh',width:500,margin:"20px auto"}
    const navigate = useNavigate();

    // const click = () => { 
    //     location.href = './component/diary'; 

    //   }
    return(
        <Grid>
            <Paper elevation={10} style={paperstyle}>
        
                <Grid align='left'>
                     <Avatar>AcUnitIcon</Avatar>Dear Diary</Grid>
                        <Grid align='center'>Sign In</Grid>
                
                <TextField label="Your Nickname" placeholder="Your Nickname" />
                
                      <Button variant="contained">Random</Button><br></br>
                      
                <br></br>
                {/* <Button onClick={click}variant="contained">Continue</Button> */}

                <Button onClick={() => navigate('/card')}>
                Continue
                </Button>

            </Paper>
        </Grid>
       
    );
}
export default SignIn