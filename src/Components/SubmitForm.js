import { Container } from '@mui/system'
import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { ArrowForwardIos } from '@material-ui/icons'
import CardList from './CardList'
import { useDispatch } from 'react-redux'
import { Add_Todo_Success, Add_Todo_Start, get_Todo_Success, get_Todo_Start } from '../Redux-Store/Actions/Action'
import { ADD_TODO_SUCCESS, GET_TODO_SUCCESS } from '../Redux-Store/Actions/ActionType'
import { useSelector } from 'react-redux/es/exports'
import firestoreDB from '../Config/fbConfig'
import { useEffect } from 'react'

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

    const auth = useSelector(state => state.auth.auth)
    
    const [todos, setTodos] = useState({
        name:auth[0].name,
        title: "",
        description: ""
    });

    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        //user validation
        if (todos.title === '') {
            console.log('Missing Title')
            return null;
        }
        if (todos.description === '') {
            console.log('Missing Description')
            return null;
        }else{
            console.log("State",todos)
            //dispatching the Adding todo action
            dispatch(Add_Todo_Start(todos))
            //dispatching the getting todo action to sync Firestore DB
            dispatch(get_Todo_Start())            
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
                    onClick={handleSubmit}
                >Submit</Button>
            </form>
          
            
            
        </>
    )
}



export default SubmitForm