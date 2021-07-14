import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


const useStyle = makeStyles((themes) => ({

    root: {
        width: "50%",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "white",

        [themes.breakpoints.down('xs')]: {
            width: "100%"
        }
    },
    title: {
        backgroundColor: "#bbdefb",
        borderRadius: "100px",
        border: "none",
        height: "20px",
        width: "70%",
        margin: "20px",
        padding: "10px",
        paddingLeft: "20px",
    },

    discription: {
        backgroundColor: "#bbdefb",
        borderRadius: "20px",
        border: "none",
        width: "70%",
        margin: "20px",
        padding: "10px",
        paddingLeft: "20px",
    },
    submit: {
        backgroundColor: "#bbdefb",
        width: "70%",
        borderRadius: "100px",
        margin: "10px"
    }
}))

function DiaryHome(props) {

    const classes = useStyle();

    return (
        <div className={classes.root}>
            <form onSubmit={props.onClick}>
                <input
                    type="text"
                    className={classes.title}
                    placeholder="Submit New"
                    onChange={props.onChangeTitle}
                    value={props.title}
                   />

                <textarea
                    rows="5"
                    className={classes.discription}
                    placeholder="Enter Description"
                    onChange={props.onChangeDescription}
                    value={props.description}
                    /><br></br>

                <Button variant="contained" className={classes.submit} type="Submit" >SUBMIT</Button>
            </form>
        </div>
    )
}

export default DiaryHome
