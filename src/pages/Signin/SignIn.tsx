import { Grid,Paper,Avatar, TextField,Button} from "@mui/material";
import  React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { handleClick } from "../../utility/util";
import { Typography } from "@mui/joy";


const SignIn = () => {

    //useNavigate is equle to navigate variable
    const navigate = useNavigate();

    //navigate to home using a function
    const navigateToHome = () =>{
        navigate('/home');
    }
    
    //add the data using array for useSate 
    const names=['sip','usra','udy','baji'];
    // for select a name in array
    const [selectedName,setSelectedName] = useState('');

    //function for get the random name
    const randomfunction = () =>{
        handleClick(names,setSelectedName);
    }

    
    return(
        <Grid>
            <Paper elevation={10} sx={{ padding:20,
                                        height:"10vh",
                                        width:400,
                                        margin:"80px auto"}}>
                <Grid sx={{marginTop:"-150px"}}>
                    <Avatar sx={{backgroundColor:"#3e6fc3",margin: "50px auto"}}><LockOutlinedIcon/></Avatar>
                    <Typography sx={{fontSize:25,fontWeight:200,marginTop:"10"}}>Sign In</Typography>
                </Grid>
               
                <TextField label="user name" placeholder="enter user Name" value={selectedName} required />
                <Button variant="contained" type="submit" color="primary" sx={{ margin:"12px 20px",backgroundColor: "#3e65h2"}} onClick={randomfunction}>Conform</Button>
                <Button disabled={!selectedName} variant="contained" type="submit" color="primary" sx={{ margin:"20px auto"}} fullWidth onClick={navigateToHome}>SIGN IN</Button>
                
            </Paper>
        </Grid>
    )
}

export default SignIn;