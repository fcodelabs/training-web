import { Typography,TextField,Button,Grid,Hidden } from "@mui/material"
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setUser} from '../state/slices/userSlice';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const nameData=["Emmy","Sophie","Kaley","Mina","Jordan","Joyce","Lucia"];

export default function LogIn(){
    const user = useSelector((state)=>state.user.value);
    let navigate = useNavigate();
    useEffect(()=>{
        if(user){
            navigate("/home");
            return
        }
    },[])
    const dispatch = useDispatch()
    const [name,setName] = useState("");

    const handleRNG=()=>{
        setName(nameData[Math.floor(Math.random()*nameData.length)]);
    }
    const handleContinue=()=>{

        if(!name){
            alert("please enter a name to continue");
            return;
        }
        dispatch(setUser(name));navigate("/home");
    }

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center",width:"100%",height:"100vh"}}>
            <Hidden lgUp={true}>
                <Typography variant="h7" style={{marginBottom:"20px",color:"#fff"}}>Dear Diary</Typography>
            </Hidden>
            <div style={{width:"720px",height:"300px",borderRadius:"5px",position:"relative",background:"white",padding:"15px",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"}}>
                <Hidden lgDown={true}>
                    <Typography variant="h7" style={{position:"absolute",top:"0",left:"0",padding:"25px",color:"#2b2b2b"}}>Dear Diary</Typography>
                </Hidden>
                <Typography variant="h3" style={{textAlign:"center",color:"#039BE5"}}>Sign In</Typography>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="end"
                        style={{marginTop:"10px"}}
                        spacing={1}
                        >
                        <Grid item lg={6}>
                            <TextField 
                                fullWidth
                                id="outlined-basic" 
                                label="Name" 
                                variant="outlined" 
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                />
                        </Grid>
                        <Grid 
                            item
                            lg={2}
                        >
                            <Button onClick={()=>handleRNG()} variant="contained" style={{width:"100%",textTransform:"uppercase"}}>Random</Button>
                        </Grid>
                    </Grid>
                <Button onClick={()=>handleContinue()} variant="contained" style={{maxWidth:"100px",textTransform:"uppercase",marginTop:"20px"}}>Continue</Button>
            </div>
        </div>
    )
}