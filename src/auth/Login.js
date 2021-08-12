import React, { useState } from 'react'
import { Container,Button,TextField } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
const Login = () => {
    const [username,setUsername] = useState('');
    const classes = useStyles();
    return (
        <div>
            <Container style={{marginTop:'15%'}}  >
                <form autoComplete="off" fullWidth >
                    <TextField className={classes.textField} name="username" fullWidth variant="outlined" label="User-Name"onChange={(e)=>{setUsername(e.target.value)}} />

            
                    <Link to={{
                        pathname:"/home",
                        state:{userName:username}
                    }} >
                               <Button className={classes.button}  variant="contained" color="primary" size="large" type="submit" fullWidth>Login</Button>
                    </Link>
                    
                </form>
            </Container>
        </div>
    )
};

export default Login;
