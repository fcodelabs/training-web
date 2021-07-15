import React, { useState} from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


const useStyle = makeStyles((themes) => ({

    form: {
        textAlign: "center",
        backgroundColor: "#bbdefb",
        margin: "auto",
        padding: "50px",
        borderRadius: "20px",
        marginTop: "150px"
    },
    Button: {
        marginLeft: "0px",
        marginTop: "30px",
        borderRadius: "50px",
        [themes.breakpoints.up('md')]: {
            marginLeft: "50px",
            marginTop: "7px",
        }

    },
    Button1: {
        marginLeft: "0px",
        marginTop: "30px",
        [themes.breakpoints.up('md')]: {
            marginLeft: "50px",
            marginTop: "50px",
        }

    }
}))


function Login() {

    const dispatch = useDispatch();

    const classes = useStyle();

    const history = useHistory();

    const [userName, setUserName] = useState("");
    const [disable, setDisable] = useState(true);

    const names = ["William", "James", "Benjamin", "Noah"]

    function onChange(e) {
        setUserName(e.target.value);
        if (userName) {
            setDisable(false)
        }
    }

    function randomName() {
        setUserName(names[Math.floor(Math.random() * names.length)]);
        setDisable(false)
    }

    const onSubmit = () => {
        dispatch({ type: "setName", sendName: userName });
        setDisable(true);
        history.push({pathname:"home"})
       
    }

    return (
        <div>
            <form  >
                <Grid container>
                    <Grid item xs={12} md={6} className={classes.form}>
                        <h1>Sign In</h1>

                        <TextField variant="outlined" placeholder="Your NickName" value={userName} onChange={onChange} required></TextField>
                        <Button variant="contained" color="primary" className={classes.Button} onClick={randomName}>Random</Button> <br></br>

                        <Button variant="contained" color="primary" className={classes.Button1} type="submit"  onClick={() => onSubmit()} disabled={disable} >Continue</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Login
