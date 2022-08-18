import React, { useState } from 'react'
import Cart from './cart/DiaryCard'
import Box from '@mui/material/Box';
import './todo.css'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Navbar from './layout/Navbar';
import { ClassNames } from '@emotion/react';
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

    //console.log("Details", details)
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
    // const todoarray  =  [
    //      { title:details.title, description: details.description},
       
    // ];

 
    

    const todolistcomponet = () => {
        return (
            // todoarray.map(aTitle => {
            //     return(
            //         <Cart title = {aTitle.title} description = {aTitle.description}/>
                    
            //     );

            // })

            // <Cart title = {details.title} description = {details.description}/>
              todos.map(todo => <Cart title = {todo.title} description = {todo.description}/>)
            )

    };

    const useStyles = makeStyles(theme => ({
      // root: {
      //   // borderRadius: "50px 50px 0 0"
      //   "& > *":{
      //     margin : theme.spacing(1),
      //     width : "450px"
      //   }
      // },
      container: {
        
      },
      textField: {
       
        // border : " 2px solid blue", 
        // borderRadius: "15px",
        width : "450px"

        
      }
    }));

   

  
    const classes = useStyles();
    

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
          {/* <TextField
          sx = {{ m:2}}
          required
          id="filled-number"
          label="Title"          
          //variant="outlined"
          name='title'
          className={classes.textField}
          type='text'
          onChange = {handleChange}
          
        /> */}
          </div>

          <div>

          <input type="text" id="ip2" onChange={handleChange} label="Description" name='description' placeholder="Description" />
    
          {/* <TextField
          required
          id="filled-number"
          label="Description"          
          //variant="outlined"
          sx = {{ m:1}}
          name='description'
          type='text'
          onChange = {handleChange}
          className={classes.textField}
          
        /> */}

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
