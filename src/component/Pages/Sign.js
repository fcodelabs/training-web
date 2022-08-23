import React from "react";
import { Avatar, Grid, Paper } from "@material-ui/core";
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import props from 'prop-types';
import {useNavigate} from 'react-router-dom'


const SignIn=()=>{
    const paperstyle={padding: 30,height:'30vh',width:500,margin:"220px auto"}
    const navigate = useNavigate();

    // const click = () => { 
    //     location.href = './component/diary'; 

    //   }
    return(
        <Grid>
            <Paper elevation={10} style={paperstyle}>
            <Grid align='center'> Sign In</Grid>
                <Grid align='left'>
                     <Avatar>AcUnitIcon</Avatar>Dear Diary</Grid>
                        
                
                     <Grid align='center'><TextField label="Your Nickname" placeholder="Your Nickname" />
                     <Button variant="contained">Random</Button><br></br></Grid>
                      
                <br></br>
                {/* <Button onClick={click}variant="contained">Continue</Button> */}

                <Grid align='center'><Button onClick={() => navigate('/card')}>
                Continue
                </Button></Grid>

            </Paper>
        </Grid>

            // const names = [
            //  'John',
            //  'Jack ',
            // 'William',
    
            //  ];

            // class Container extends Component {
            //     constructor() {
            //       super();
            //       this.state = {
            //         name: this.getRandomName()
            //       };
            //     }
            //     getRandomName() {
            //       return names[Math.floor(Math.random() * names.length)];
            //     }
       
    );
}
export default SignIn