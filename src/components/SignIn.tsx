import { Grid,Paper,Avatar, TextField,Button} from "@mui/material";
import  React from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignIn = () => {

    return(
        <Grid>
            <Paper elevation={10}>
                <Grid>
                    <Avatar><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
               
                <TextField label="user name" placeholder="enter user Name"  fullWidth required />
                <Button variant="contained" type="submit" color="primary"  fullWidth>Sign In</Button>
                
            </Paper>
        </Grid>
    )
}

export default SignIn;