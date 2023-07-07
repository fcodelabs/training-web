import {Container,TextField,Button} from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import  React  from "react";
import { useState } from 'react';


const Form = () => {

    //create use state for title
  const [title,setTitle] = useState<string>();
  // create use state for description
  const [description,setDescription] = useState<string>();

  // clear the textfields
  const clearFields = () => {
    setTitle("");
    setDescription("");
  }

  //to updated the value in title
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  

  // to update the value in description
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };
  

  // this function for print the values
  function handleSubmit  (){
    console.log(title);
    console.log(description);
    clearFields();
    
  }


    const textStyles = {
        padding:"5px",
        width:"80vw",
        height:"40px",
        borderRadius:"30px",
        marginTop:"10px",
        marginRight:"30px"
      }

    return(
       
        <Container sx={{ bgcolor: '#cfe8fc', height: '100vh'}} >
          <TextField InputProps={{style:textStyles}} variant="outlined" placeholder='Submit New' id="fullWidth" value={title} onChange={handleTitleChange}  />
          <Button sx={{margin:"10px 20px auto",borderRadius:"30px",width:"150px",bgcolor:"#A0BFE0",color:"#ffffff"}} variant="outlined" type='submit' onClick={handleSubmit}>Submit</Button>
          {/* <Button variant="contained" type="submit" color="primary" sx={{ margin:"20px auto"}}>SIGN IN</Button> */}
          <Textarea minRows={2} placeholder='Enter Description...' value={description} onChange={handleDescriptionChange}  sx={{bgcolor:"#A0BFE0", marginTop:"20px"}} />
        </Container>
     
      )
}

export default Form;