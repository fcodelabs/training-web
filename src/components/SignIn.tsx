import { Grid,Paper,Avatar, TextField,Button} from "@mui/material";
import  React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const SignIn = () => {

    const navigate = useNavigate();

    const navigateToHome = () =>{
        navigate('/home');
    }
    
    //add the data using array for useSate 
    const [names,setNames] = useState(['sip','usra','udy','baji']);
    // for select a name in array
    const [selectedName,setSelectedName] = useState('');

    // this event handler use for random btn
    const handleClick = () => {
        //get the indexnum in the 'names' array
        const randomIndex = Math.floor(Math.random() * names.length);
        const randomName = names[randomIndex];
        //set randomNames to state
        setSelectedName(randomName);
        
    }

    
    // =========================Styles start===================

    const paperStyle={
        padding:20,
        height:"50vh",
        width:400,
        margin:"80px auto"
    }

    const avatarStyle={
        backgroundColor:"#3e6fc3",
        margin: "5px auto"
    }

    const btnStyle={
        margin:"12px 20px",
        backgroundColor: "#3e65h2"
    }

    const signbtnstyle={
        margin:"20px auto"
        
    }

    // ==========================styles end===============

    
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
               
                <TextField label="user name" placeholder="enter user Name" value={selectedName} required />
                <Button variant="contained" type="submit" color="primary" style={btnStyle} onClick={handleClick}>Conform</Button>
                <Button disabled={!selectedName} variant="contained" type="submit" color="primary" style={signbtnstyle} fullWidth onClick={navigateToHome}>SIGN IN</Button>
                
            </Paper>
        </Grid>
    )
}

export default SignIn;