import React from 'react';
import { useState} from 'react';
import { names } from 'unique-names-generator';     // import the dictionary
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import './style.css';
import Logo from '../../assets/logo.svg';
import { useNavigate } from "react-router-dom";
const { uniqueNamesGenerator } = require('unique-names-generator');

  
export default function SignIn() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [click, setClick] = useState(false);
    
    const handleRandom = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setName(uniqueNamesGenerator({ dictionaries: [names] })); // set the random name
        setClick(true); 
    }

    const handleSave = (e: any) => {
        e.preventDefault();
        setName(e.target.value);
        setClick(true);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        navigate("/home", {state: {name: name}});
        
    }


return (
    
   
    <Container sx={{width: "50%", mt: "10%",  borderRadius: "10px", padding: "3vw", background: "white"}}>
    {/* <Logo/> */}
    <div style={{textAlign: "left", paddingLeft: "3vw", display: "flex"}}>
    
    <img style={{width: '5%', height: '5%', textAlign: "left"}} src={Logo} alt="Logo" /> 
    <span style={{margin: "1vw"}}>Dear Diary</span>
    
    </div>
    
    <Typography variant="h4" component="h4" sx={{color: "#039BE5", mb: "2vw", textAlign:"center"}}>
       Sign In
    </Typography>
    <Grid container spacing={2} sx={{mb: "2vw", padding: '0 3vw 0 3vw'}}>
        <Grid md={9}>
        <TextField id="outlined-basic" label="Your Nickname" variant="outlined" name='name' required value={name} onChange={handleSave} sx={{width: "100%"}} 
        error = {(name || !click) ? false: true}
        helperText = {(name || !click) ? "": "Required"} />
        </Grid>
        <Grid md={3}>
        <Button variant="contained"  onClick={handleRandom} sx={{width: "100%", borderRadius: "100px", background:"#039BE5"}}>RANDOM</Button>
        </Grid>
      </Grid>
    <div style={{textAlign: "center"}}>
    <Button variant="contained" disabled={!click} onClick={handleSubmit} sx={{ height: "100%", borderRadius: "100px", background:"#039BE5"}}>CONTINUE</Button>
    </div>
    
    </Container>
     
      
);
   
   
}