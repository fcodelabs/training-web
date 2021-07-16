import { Box, Card, CardContent, Typography, TextField, Button, CardActions } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addName } from "./actions";

const useStyles = makeStyles({
    root: {
        Width: 800,
        height: 300,
        borderRadius: 17,
    },
    text: {
        color: '#1a75ff',
        marginTop: 50
    },
    txtfield: {
        marginRight: 10
    },

    btn1: {
        borderRadius: "5em",
        marginTop: 10,
        width: 100
    },
    btn2: {
        borderRadius: "5em",
        width: 150,
        height: 40,
    }
})

const Login = () => {
    let history = useHistory();
    const classes = useStyles();
    const [name, setName] = useState('');
    const nameList = ["arthur", "barry", "robin", "bruce", "clark", "lex", "james", "peter", "tony", "steven", "logan"];
    const dispatch = useDispatch();

    const haddleClick = () => {
        dispatch(addName({ name }))
        history.push("/home")
    }

    const randomName = () => {
        const randName = nameList[Math.floor(Math.random() * nameList.length)]
        setName(randName)
    }

    return (
        <Box display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            mr={1} ml={1}>
            <Card className={classes.root} style={{ width: '700px' }}>
                <Typography variant='h4' align='center' className={classes.text}>Sign In</Typography><br />
                <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                    <TextField
                        margin="dense"
                        id="your-nickname"
                        label="Your Nickname"
                        autoComplete="current-password"
                        variant="outlined"
                        className={classes.txtfield}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <Button
                        className={classes.btn1}
                        style={{ backgroundColor: "#1a75ff", color: 'white' }}
                        align='center'
                        onClick={randomName}>
                        RANDOM
                    </Button>
                </CardContent>
                <CardActions style={{ justifyContent: 'center' }}>
                    <Button
                        disabled={!name}
                        className={classes.btn2}
                        style={{ backgroundColor: "#1a75ff" }}
                        onClick={haddleClick}
                    >
                        CONTINUE <ArrowForwardIcon />
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default Login;