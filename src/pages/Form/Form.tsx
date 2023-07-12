import {Container,TextField,Button,Grid} from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import  React  from "react";
import { useState } from 'react';
import DiaryCard from '../../components/DiaryCard/DiaryCard';

interface Card {
  title: string;
  description: string;
  userName:string;
}


const Form = () => {

    //create use state for title
  const [title,setTitle] = useState<string>();
  // create use state for description
  const [description,setDescription] = useState<string>();
  // create use state for set cards array
  const [cards, setCards] = useState<Card[]>([]);

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
  

  // this function for print the values and show error alert
  function handleSubmit  (e:any){
    e.preventDefault();
    if (!title || !description) {
      alert('Error: Please provide a title and description.');
      return;
    }
    if (title !== undefined && description !== undefined) {
      const newTitle = title as string;
      const newDescription = description as string;
      console.log(newTitle);
      console.log(newDescription);
      setCards([...cards, { title: newTitle, description: newDescription, userName: '' }]);
      clearFields();
    }
    
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
          <Grid container spacing={2} sx={{ mt: 2 }}>
            {cards.map((card, index) => (
           <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <DiaryCard title={card.title} description={card.description} userName={card.userName} />
          </Grid>
        ))}
      </Grid>
        </Container>
     
      )
}

export default Form;