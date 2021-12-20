import React from 'react';
import './LoginForm.css';
import { Grid, Paper, TextField, Button } from '@material-ui/core';

export default function LoginFrom() {
    const btnStyle = {margin: "50px 0"}
    return (
        <Grid>
            <Paper elevation={10} className="paper">
                <Grid align="center" className='signIn'>
                    <h1>Sign In</h1>
                </Grid>
                <Grid align="center" className='textField'>
                    <TextField
                        id="outlined-textarea"
                        label="Your Nickname"
                        placeholder="Your Nickname"
                        multiline
                        required
                    />
                    <Button 
                        variant="contained" 
                        type="submit" 
                        color="primary" 
                        >
                        RANDOM
                    </Button>  
                </Grid>

                <Grid align="center">
                    <Button 
                        style={btnStyle} 
                        variant="contained" 
                        type="submit" 
                        color="primary"  
                    >
                        CONTINUE
                    </Button> 
                </Grid>      
            </Paper>
        </Grid>
    )
}
