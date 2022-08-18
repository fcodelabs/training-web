import React, { useState } from 'react'
import Cart from '../Cart/DiaryCard'
import Box from '@mui/material/Box';
import './Todo.css'
import { Button } from '@mui/material';
import Navbar from '../Layout/Navbar';
import { makeStyles } from '@material-ui/core/styles';

export default function Todo() {

    const[details,setDetails] = useState({
        title:"",
        description: "",

    });

    const [todos, setTodos] = useState([])

    const handleChange = (e) => {
        const name = e.target.name;
        const value= e.target.value;
    
    setDetails((prev) => {
        return { ...prev,[name]: value};
        }
    );

    
}

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    todos.push(details)
    setDetails({
      title: '',
      description: ''
    })
  }
    


    const todolistcomponet = () => {
        return (
           
              todos.map(todo => <Cart title = {todo.title} description = {todo.description}/>)
            )

    };

    const useStyles = makeStyles(theme => ({
      
      textField: {
        width : "450px"
      }
    }));

  return (
    
    <div>
        <Navbar/>
        <div className='Details  Details-header'>
        <Box
      sx={{
        width: 500,
        height: 200,
        backgroundColor: 'white',
        opacity: 0.7,
        borderRadius: '20px',
        boxShadow: 10, 

      }}>
        



        <form onSubmit={handleSubmit}>
          <div>
          <input type="text" id="ip2" onChange={handleChange} label="Title" name='title' placeholder="Title" />
          </div>

          <div>

          <input type="text" id="ip2" onChange={handleChange} label="Description" name='description' placeholder="Description" />
          </div>

        <Button sx = {{ m:1}} type = 'submit'>Submit</Button>

        </form>
        </Box>       
    </div>

        <div>

        {todolistcomponet()}

        </div>

        
    </div>
   
  )
}
