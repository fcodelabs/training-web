import { Grid,Paper,Avatar, TextField,Button} from "@mui/material";
import  React from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Margin } from "@mui/icons-material";

const SignIn = () => {

    const paperStyle={
        padding:20,
        height:"70vh",
        width:400,
        margin:"20px auto"
    }

    const avatarStyle={
        backgroundColor:"#3e6fc3",
        margin: "5px auto"
    }

    const btnStyle={
        margin:"12px 20px"
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
               
                <TextField label="user name" placeholder="enter user Name" required />
                <Button variant="contained" type="submit" color="primary" style={btnStyle}>Conform</Button>
                
            </Paper>
        </Grid>
    )
}

export default SignIn;