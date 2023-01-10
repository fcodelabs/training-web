import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { borderRight } from '@mui/system';
import Grid from '@mui/material/Grid';
import { ListItem, Stack, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import { uniqueNamesGenerator, Config, names } from 'unique-names-generator';
import { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import EastIcon from '@mui/icons-material/East';
import flowerSvg from '../../assests/flower.svg';
import Item from '@mui/material/ListItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Login = () => {

    const [name, setName] = useState(""); //state for the generated name
    const [initial, setInitial] = useState(true); //state for the initial render
    const navigate = useNavigate();
    // const username = useSelector((state: any) => state.user.value.username)

    const generateName = () => { //generate random name
        const config: Config = {
            dictionaries: [names],
        }    
        const characterName: string = uniqueNamesGenerator(config);
        setName(characterName); //setting the generated name to the state
        setInitial(false); //setting the initial render to false
    }


    return ( 
        <div style={{
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            minHeight:"100vh"
        }}>      
        <Container sx={{textAlign:'center', margin:0, width: "50%",padding:"2vw", borderRadius:"10px",background:'white'}}>
        <div style={{textAlign:"left", marginBottom:"2vw"}}>
        <img src={flowerSvg} 
            style ={{width: "50px", height: "50px", borderRadius: "10px"}}
            alt="flower SVG" />
            <span style={{marginLeft:"1vw"}}>Dear Diary</span>
        </div>
            
        <Typography variant='h4' component="h4" sx = {{color: "#87CEEB", mb: "2vw"}}>Sign In</Typography>'    

        <Grid container spacing={2} 
        sx={{padding:"0vw 3vw 0vw 3vw", marginBottom:"2vw"}}
        >
        
        <Grid xs={12} md={9}>
        <TextField 
        sx={{width:"90%", }}
        id="outlined-basic" required
        onChange={(e) => setName(e.target.value)}
        label="Your Nickname" variant="outlined" 
        value={name}
        error={(name || initial) ? false : true}
        helperText={(name || initial) ? '' : 'Required'}
        />
        </Grid>

        <Grid xs={12} md={3}>
        <Button style={{
            width:"100%",
            borderRadius: 20,
        }} variant="contained" onClick={generateName}>Random</Button>
        </Grid>

        </Grid>


        <Button 
        onClick={() =>{
            navigate('home/'+name)
        }}
        disabled={(name) ? false : true} color="primary"
        size='large' variant="contained" endIcon={<EastIcon />}
        style={{
            
            borderRadius: 20,
        }}>
        Continue 
        </Button>
        </Container>

        </div>
     );
}
 
export default Login;