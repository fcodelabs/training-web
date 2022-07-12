import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { teal } from '@mui/material/colors'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { SignIn_Start, SignIn_Success } from '../Redux-Store/Actions/Action'
import {Navigate} from 'react-router-dom'

function DearDiarySignin() {

  
  const dispatch = useDispatch();
  
  const [auth , setAuth] = useState({
    name:"",
  })

  const handleChange = (e) => {  
    //srtting the state  
    setAuth({
      ...auth, [e.target.id]: e.target.value
    });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
   //validation
    if (auth.name === '') {
      console.log('Missing Name')
    }
     else {
      console.log("State", auth)
      dispatch(SignIn_Start(auth))
      
    }
  }

const creds  = useSelector(state => state.auth.auth)

  
console.log("creds", creds)


  const paperStyle = {

    padding: "20px",
    height: '40vh',
    width: '80vh',
    margin: "30vh auto",
    backgroundColor: "#66BFBF",
    opacity: "80%",
    borderRadius: "30px"

  }
  
  return (
    <>
    
      {creds[0] && (
        
        <Navigate to="/Home" replace={true} />
      )}
  
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Typography style={{ fontSize: "40px" }}>Sign In</Typography>
        <form autoComplete='false'>
          <TextField fullWidth id='name' type={"text"} onChange={handleChange} placeholder='Name' style={{ borderRadius: "12px", marginTop: "20px", }}> </TextField>          
          <Button fullWidth onClick={handleSubmit} style={{ color: "black" , marginTop: "60px"}}> Sign In</Button>
        </form>
      </Paper>
    </Grid>
    </>
  )
}

export default DearDiarySignin