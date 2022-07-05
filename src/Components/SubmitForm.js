import { Container } from '@mui/system'
import React from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@mui/system'
import { Button } from '@mui/material'
import { BorderColor } from '@material-ui/icons'
import { ArrowForwardIos } from '@material-ui/icons'


//custom css for components
const useStyles = makeStyles({
    input: {
        color: "#66BFBF",
        opacity: "90%"
    },
    btn : {
        '&:hover' : {
            backgroundColor: "#66BFBF"
        }, 
        borderColor:"white",            
        fontSize : "15px",
        opacity: "80%",
        borderRadius : "12px",
        color: "white",
        margin :"10px"
        
    }
   
})
function SubmitForm() {
    
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const classes = useStyles();
   
    return (
        <Box
            sx={{
                width: 800,
                maxWidth: '100%',
                
            }}
        >
            <form noValidate autoComplete='off'>
                <TextField
                    
                    label="Submit New"
                    fullWidth   
                    defaultValue="Enter Name"
                    InputProps={{
                        className: classes.input
                    }} 
                    required
                />
                <TextField
                    id="filled-multiline-static"
                    label="Description"
                    multiline
                    rows={5}
                    fullWidth
                    defaultValue="Enter Description"
                    variant="filled"
                    InputProps={{
                        className: classes.input,
                       
                    }} 
                />
                <Button 
                    className = {
                        classes.btn
                    }
                    type="submit"
                    endIcon= {<ArrowForwardIos/>}
                >Submit</Button>
            </form>
        </Box>

    )
}

export default SubmitForm