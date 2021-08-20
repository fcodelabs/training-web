import React from 'react';
import style from './LoginPage.module.css'
import {Button, CardContent,  makeStyles, Typography} from "@material-ui/core";
import Card from "../ui/Card";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TextField from '@material-ui/core/TextField';
import names from  'random-names-generator'
import {useState, useEffect} from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:70
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        height:300,
        boxShadow:200,
        orderRadius:70
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 201,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    pIcon:{
        color:'crimson'
    },
    txtField: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    name:{
        left:'40%',
        transform:`translateX(-40%)`,
        borderRadius:20,
        width:400,
       marginTop:20
    },
    button:{
        left:'40%',
        transform:`translate(-120%,70%)`,

    },
    button2:{
        left:'40%',
        transform:`translate(-500%,8em)`,
        backgroundColor:'darkblue'
    },
    topic :{
        left:'40%',
        transform:`translateX(45%)`,
        color:'crimson',
        fontWeight:'bold',
        fontSize:30
    }

}));




function LoginPage() {
    const classes = useStyles();
    const  [randomName,  setRandomName]  =  useState(null);

    function randomNameGenerator() {
        let name = names.random();
        setRandomName(name)
        console.log("Test")
    }

    useEffect(()  => {
        // Generate a random name
        let name = names.random();

        // Set the randomName state to the generated random name
        setRandomName(name)
    }, [])


    return (
        <div className={style.main}>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <PersonAddIcon className={classes.pIcon}/>
                        <Typography component="h5" variant="h5" className={classes.topic}>
                            Sign In
                        </Typography>
                        <TextField id="outlined-basic" label="Your nick name*"  variant="outlined" className={classes.name} >
                            {randomName}
                        </TextField>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Random
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.button2} onClick={randomNameGenerator}>
                            Random
                        </Button>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}

export default LoginPage;
