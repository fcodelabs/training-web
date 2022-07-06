import { Container } from '@mui/system'
import React, { useRef, useState } from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { BorderColor } from '@material-ui/icons'
import { ArrowForwardIos } from '@material-ui/icons'
import CardList from './CardList'


//custom css for components
const useStyles = makeStyles({
    input: {
        color: "#66BFBF",
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

    const [todos, setTodos] = useState([]);

    const [attributes, setAttributes] = useState({
        title: "",
        description: ""
    });

  
    
    //Submit Validations
    const handleSubmit = (e) => {

        e.preventDefault();
        if (attributes.title === '') {
            return console.log('Missing Title ')
        }

        if (attributes.description === '') {
            return console.log('Missing description ')
        }

        const title = attributes.title;
        const description = attributes.description;

        setTodos((prevTodo) => [...prevTodo, { title: attributes.title, description: attributes.description }])


        console.log(title)
        console.log(description)

    }

    const classes = useStyles();

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
                display : 'inline'

            }}
        >
            <form autoComplete='off'>

                <TextField

                    id="title"
                    label="Title"
                    fullWidth
                    placeholder="Enter Name"
                    variant="filled"
                    type="text"
                      //getting the values of inputs
                    onChange={e => setAttributes({ ...attributes, title: e.target.value })}
                    InputProps={{
                        className: classes.input
                    }}

                    style={{ backgroundColor: "#66BFBF", opacity: "80%", borderRadius: "12px", margin: "8px" }}
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
                    onChange={e => setAttributes({ ...attributes, description: e.target.value })}
                    InputProps={{
                        className: classes.input,

                    }}

                    style={{ backgroundColor: "#66BFBF", opacity: "80%", borderRadius: "12px", margin: "8px" }}
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
            {/* showcasing the diary Cards */}
            <div>
                <CardList todos={todos} />
            </div>
        </Box>

    )
}

export default SubmitForm