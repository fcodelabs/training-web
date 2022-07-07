import { Container } from '@mui/system'
import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { ArrowForwardIos } from '@material-ui/icons'
import CardList from './CardList'
import { useDispatch } from 'react-redux'
import { Add_Todo } from '../Redux-Store/Actions/Action'
import { ADD_TODO } from '../Redux-Store/Actions/ActionType'

//custom css for components
const useStyles = makeStyles({
    input: {
        color: "black",
        opacity: "90%"
    },
    btn: {
        '&:hover': {
            backgroundColor: "#66BFBF"
        },
        borderColor: "white",
        fontSize: "15px",
        opacity: "80%",
        borderRadius: "12px",
        color: "white",
        margin: "10px"

    }

})
function SubmitForm() {
    //setting up the useState and useDispatch
    const [todos, setTodos] = useState({
        title: "",
        description: ""
    });

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        //Submit Validations
        if (todos.title === '') {
            console.log('Missing Title')
        }
        if (todos.description === '') {
            console.log('Missing Description')
        }
        else {


            dispatch(

                {
                    type: ADD_TODO,
                    payload: {
                        title: todos.title,
                        description: todos.description
                    }
                })
        }
    }

    
    const classes = useStyles();

    return (
        <>
            <form autoComplete='off'>
                
                <TextField

                    id="title"
                    label="Title"
                    fullWidth
                    placeholder="Enter Name"
                    variant="filled"
                    type="text"
                    //getting the values of inputs
                    onChange={e => setTodos({ ...todos, title: e.target.value })}
                    InputProps={{
                        className: classes.input
                    }}

                    style={{ backgroundColor: "#66BFBF", opacity: "70%", borderRadius: "12px", margin: "8px" }}
                />

                <TextField

                    id="description"
                    label="Description"
                    multiline
                    rows={5}
                    type="text"
                    fullWidth
                    placeholder="Enter Description"
                    variant="filled"
                    //   getting the values of inputs
                    onChange={e => setTodos({ ...todos, description: e.target.value })}
                    InputProps={{
                        className: classes.input,

                    }}

                    style={{ backgroundColor: "#66BFBF", opacity: "70%", borderRadius: "12px", margin: "8px" }}
                />

                <Button
                    className={
                        classes.btn
                    }
                    type="submit"
                    endIcon={<ArrowForwardIos />}
                    onClick={handleClick}
                >Submit</Button>
            </form>
            {/* showcasing the diary Cards */}
            <div>
                <CardList todos={todos} />
            </div>

        </>
    )
}



export default SubmitForm