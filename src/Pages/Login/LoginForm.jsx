import React from 'react';
import './LoginForm.css';
import { useState} from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';

export default function LoginFrom() {
    const [user, setUser] = useState('');
    const names = ["Hope", "Launa", "Katherine", "Walker", "Moses", "Tayna", "Rosia", "Yahaira", "Tommy", "Elwanda", "Clorinda", "Sheron", "Kayla", "Clementina", "Rene", "Rex", "Kathy", "Latoya", "Shirleen", "Shoshana"];

    const handleSubmit = () => {
        window.location.replace('/home');
        localStorage.setItem("user", user);
    }

    const getRandomNumber = (max) => Math.floor(Math.random() * max);

    const generateRandomName = () => setUser(`${names[getRandomNumber(names.length)]}`);

    const btnStyle = {margin: "30px 0", backgroundColor: "#039ee3", borderRadius: "30px"}

    const randomBtnStyle = {margin: "10px 30px", backgroundColor: "#039ee3", borderRadius: "30px"}

    return (
        <div >
            <Grid className='background'>
                <Paper elevation={10} className="paper">
                    <Grid align="center" className='signIn'>
                        <h1 style={{color: '#039ee3'}}>Sign In</h1>
                    </Grid>
                    <Grid align="center" className='textField'>
                        <TextField
                            id="outlined-textarea"
                            label="Your Nickname"
                            placeholder="Your Nickname"
                            multiline
                            required
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            style = {{width: 350}}
                            
                        />
                        <Button 
                            variant="contained" 
                            type="submit" 
                            color="primary"
                            onClick={generateRandomName}
                            style={randomBtnStyle}
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
                            onClick={handleSubmit}
                            disabled={!user}
                        >
                            CONTINUE
                        </Button> 
                    </Grid>      
                </Paper>
            </Grid>
        </div>
    )
}
