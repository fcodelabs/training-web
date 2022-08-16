import React, { useState } from 'react'
import Cart from './cart/cart'
import Box from '@mui/material/Box';
import './todo.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Todo() {

    const[details,setdetails] = useState({
        title:"",
        description: "",

    });
    // const[description,setdescription] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(title,description)
// }

const handleChange = (e) => {
    const name = e.target.name;
    const value= e.target.value;
    
    setdetails((prev) => {
        return { ...prev,[name]: value};
        }
    );
    

}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    

}
    const todoarray  =  [{git 

        title:"workshop",
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'

    },{
        title:'Hello world 2',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
        title:'Hello world 3',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'

    }
];

    const todolistcomponet = () => {
        return (
            todoarray.map(aTitle => {
                return(
                    <Cart title = {aTitle.title} description = {aTitle.description}/>
                    
                );

            }))

    };



  return (
    <div>
        <div className='Details  Details-header'>
        <Box
      sx={{
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        opacity: 0.7,
        borderRadius: '16px',
        boxShadow: 10,  
      }}>
        <form onSubmit={handleSubmit}>
        <TextField
          required
          id="filled-required"
          label="Title"          
          variant="filled"
          fullWidth
          name='title'
          type='text'
          onChange = {handleChange}

        />
        <TextField
          required
          id="filled-required"
          label="Description"          
          variant="filled"
          fullWidth
          name='description'
          type='text'
          onChange = {handleChange}
        />
        <Button type = 'submit'>Submit</Button>

        </form>


        </Box>       
    </div>

        <div>
        {todolistcomponet()}
       
        </div>
        
        
        
    </div>
   
  )
}
