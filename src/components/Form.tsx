import {Container,TextField,Button} from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import  React  from "react";
import { useState } from 'react';
import DiaryCard from './DiaryCard';


const Form = () => {

    //create use state for title
  const [title,setTitle] = useState<string>();
  // create use state for description
  const [description,setDescription] = useState<string>();
  // create use state for set cards array
  const [cards, setCards] = useState([]);

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
       
        <Container sx={{ bgcolor: '#cfe8fc', minHeight: '100vh'}} maxWidth="xl">
          <TextField InputProps={{style:textStyles}} variant="outlined" placeholder='Submit New' id="fullWidth" value={title} onChange={handleTitleChange}  />
          <Button sx={{margin:"10px 20px auto",borderRadius:"30px",width:"150px",bgcolor:"#A0BFE0",color:"#ffffff"}} variant="outlined" type='submit' onClick={handleSubmit}>Submit</Button>
          {/* <Button variant="contained" type="submit" color="primary" sx={{ margin:"20px auto"}}>SIGN IN</Button> */}
          <Textarea minRows={2} placeholder='Enter Description...' value={description} onChange={handleDescriptionChange}  sx={{bgcolor:"#A0BFE0", marginTop:"20px"}} />
          <DiaryCard title="Title" userName="User name" description="Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
          looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. 
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
          The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
          Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."/>
        </Container>
     
      )
}

export default Form;