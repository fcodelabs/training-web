import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import background from './images.jpeg';

import Box from '@mui/material/Box';
import './sass.scss';
import { width } from '@mui/system';


function DiaryHome() {
    const[title,setTitle]=React.useState('')
    const[details,setDetails]=React.useState('')

    const handleSubmit =(e) => {
        e.preventDefault()

        if(title && details){
            console.log(title,details)
        }
    }
    return (
        
        <form noValidate onSubmit={handleSubmit}
          component="form"
          sx={{'& .MuiTextField-root': { m: 1 }, }}
          noValidate
          autoComplete="off"
        >
        <div>
        <br/>
        <TextField 
        onChange={(e)=> setTitle(e.target.value)}
         className="inputRounded"  fullWidth autoFocus id="input-card" placeholder="Submit New" type="text" variant="outlined" size="small"/>
       
        </div>
        <br/>
        <div>
        <TextField
        onChange={(e)=> setDetails(e.target.value)}
        className="inputRounded" fullWidth autoFocus id="input-description" placeholder="Enter Description" type="text" variant="outlined" multiline rows={5}/>
           
        </div>
        <br/>
        <div>
      
            <Button  fullWidth style={{backgroundColor: 'rgb(28, 103, 243)', color: 'black'}} type ="submit" variant="contained" sx={ { borderRadius: 28} }>Submit</Button>
        
            </div>
       
        </form>)

}
export default DiaryHome;