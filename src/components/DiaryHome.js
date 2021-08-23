import React from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

/*Styling*/
const useStyles = makeStyles((theme) => ({
    container: {
        position: 'relative',
        width: '100%',
        height: 400,
    },
    root: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        width: 350,
        left: 20,
        top: '58%',
        transform: `translateY(-50%)`,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    title: {
        backgroundColor: '#139ade',
        borderRadius: 30,
        '& fieldset': {
            border: 'none',
        },
    },
    description: {
        backgroundColor: '#139ade',
        borderRadius: 8,
        '& fieldset': {
            border: 'none'
        }
    },
    submitButton: {
        backgroundColor: '#2271F1EE',
        borderRadius: 20,
        marginBottom: 10,
        border: 'none',
        '&:hover': {
            backgroundColor: '#1d56c7',
        }
    }
}));

function DiaryHome(props) {
    const classes = useStyles();

    //prevent form default behaviour
    function formHandler(event) {
        event.preventDefault();
    }

    return (
        <div className={classes.container}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={formHandler}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    value={props.title}
                    onChange={props.titleHandler}
                    className={classes.title}
                    placeholder='Title'
                    size="small"
                />
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={props.description}
                    onChange={props.descriptionHandler}
                    className={classes.description}
                    placeholder='Description'
                />
                <Button
                    variant='outlined'
                    className={classes.submitButton}
                    onClick={props.submitHandler}
                >
                    SUBMIT
                </Button>
            </form>
        </div>
    );
}

export default DiaryHome;