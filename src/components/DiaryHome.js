import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

/*Styling*/
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#2fb5ef',
        width: 350,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    title: {
        backgroundColor: '#649ef3',
        borderRadius: 30,
        '& fieldset': {
            border: 'none'
        }
    },
    description: {
        backgroundColor: '#649ef3',
        borderRadius: 8,
        '& fieldset': {
            border: 'none'
        }
    },
    submitButton: {
        backgroundColor: '#427df3',
        borderRadius: 20,
        marginBottom: 10,
        '&:hover': {
            backgroundColor: '#1d56c7',
        }
    }
}));

function DiaryHome(props) {
    const classes = useStyles();

    //states
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    //get title field value
    function titleHandler(event) {
        setTitle(event.target.value);
    }

    //get description field value
    function descriptionHandler(event) {
        setDescription(event.target.value);
    }

    //submit button handler
    function submitHandler() {
        console.log(`Title: ${title}`);
        console.log(`Description: ${description}`);

        //clear text fields
        setTitle('');
        setDescription('');
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-basic"
                variant="outlined"
                value={title}
                onChange={titleHandler}
                className={classes.title}
                placeholder='Title'
            />
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                variant="outlined"
                value={description}
                onChange={descriptionHandler}
                className={classes.description}
                placeholder='Description'
            />
            <Button
                variant='contained'
                className={classes.submitButton}
                onClick={submitHandler}
            >
                SUBMIT
            </Button>
        </form>
    );
}

export default DiaryHome;