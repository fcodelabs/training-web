import React from "react";
import TextField from '@material-ui/core/TextField';
import { Grid, Paper } from "@material-ui/core";


import Button from '@mui/material/Button';

const Diary=()=>{
    const paperstyle={align:'left',height:'30vh',width:'100vh',margin:"5px",padding: 20,
    }
    
    return(

        <Grid>
            <Paper elevation={10} style={paperstyle}>
            <Grid align='left'>Home</Grid>
            <Grid align='left'> <TextField label="Submit new" placeholder="Submit New" />
                <Button variant="contained">Submit</Button><br></br>
                <TextField label="Description" placeholder="Description" /></Grid>

                

                
                
            </Paper>
            </Grid>
    );


}



export default Diary

