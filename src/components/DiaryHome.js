import React, {useContext, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Context} from "../App";

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

function DiaryHome() {
    const classes = useStyles();

    //context
    const context = useContext(Context);

    //states
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    //submit button handler
    function submitHandler() {

        if (title.length > 0 && description.length > 0) {
            //state change
            let setData = context[1];
            setData({
                title: title,
                description: description
            });

            //push data to array
            context[2].push({
                title: title,
                description: description
            });

            //clear text fields
            setTitle('');
            setDescription('');
        } else {
            if (title.length <= 0) {
                console.log('Missing title');
            }
            if (description.length <= 0) {
                console.log('Missing description');
            }
        }
    }

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
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    className={classes.title}
                    placeholder='Title'
                    size="small"
                />
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                    className={classes.description}
                    placeholder='Description'
                />
                <Button
                    variant='outlined'
                    className={classes.submitButton}
                    onClick={submitHandler}
                >
                    SUBMIT
                </Button>
            </form>
        </div>
    );
}

export default DiaryHome;