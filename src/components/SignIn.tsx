import { Grid,Paper,Avatar, TextField,Button} from "@mui/material";
import  React, { useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const SignIn = () => {

    const [names,setNames] = useState(['sip','usra','udy','baji']);
    const [selectedName,setSelectedName] = useState('');

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * names.length);
        const randomName = names[randomIndex];
        setSelectedName(randomName);
        
    }

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

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
               
                <TextField label="user name" placeholder="enter user Name" value={selectedName} required />
                <Button variant="contained" type="submit" color="primary" style={btnStyle} onClick={handleClick}>Conform</Button>
                <Button disabled={!selectedName} variant="contained" type="submit" color="primary" style={signbtnstyle} fullWidth>SIGN IN</Button>
                
            </Paper>
        </Grid>
    )
}

export default SignIn;