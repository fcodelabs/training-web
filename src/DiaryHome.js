import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './sass.scss';



const DiaryHome=({addCard})=> {

    const[title,setTitle]=React.useState('')
    const[details,setDetails]=React.useState('')

    const handleSubmit =(e) => {
        e.preventDefault()

        if(title && details){
            console.log(title,details)

            addCard(title,details);
            
        }else if(details){
            console.log("Missing Title")
        }else if(title){
            console.log("Missing Description")
        }else{
            console.log("Missing Title")
            console.log("Missing Description")
            
        }
        e.target.reset();
        setTitle('');
        setDetails('');
       
          
       
    }
    return (
       

        <form noValidate onSubmit={handleSubmit}
          component="form"
          sx={{'& .MuiTextField-root': { m: 1 }, }}
          noValidate
          autoComplete="off"
        >


        <div className="firstRow">
        <br/>
        <TextField 
        value={title}
        required
        onChange={(e)=> setTitle(e.target.value)}
         className="inputRounded"  autoFocus id="input-card" placeholder="Submit New" type="text" variant="outlined" size="small" sx={{m:1,width:"94%" }}/>

         <Button style={{backgroundColor: 'rgb(28, 103, 243)', color: 'black'}} type ="submit" variant="contained" sx={ { borderRadius: 28,m:1} }>Submit</Button>
       
        </div>
        
        <br/>
        <div>
        <TextField 
        value={details} 
        required

        onChange={(e)=> setDetails(e.target.value)}
        className="inputRounded" fullWidth autoFocus id="input-description" placeholder="Enter Description" type="text" variant="outlined" multiline rows={5}/>
           
        </div>
        <br/>

        
       
        </form>)
        

}
export default DiaryHome;

