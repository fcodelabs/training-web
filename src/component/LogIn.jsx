import { Typography,TextField,Button } from "@mui/material"
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setUser} from '../state/user';
import { useNavigate } from "react-router-dom";
export default function LogIn(){
    const user = useSelector((state)=>state.user.value);
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [name,setName] = useState("")
    return(
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"100%",height:"100vh"}}>
            <div style={{borderRadius:"5px",boxShadow:"2px 2px 5px",background:"white",padding:"15px",textAlign:'center'}}>
                <Typography variant="h6" style={{textAlign:"start"}}>Dear Diary</Typography>
                <Typography variant="h3" style={{color:"#039BE5"}}>Sign In</Typography>
                <div style={{display:"flex",gap:"10px"}}>
                    <TextField 
                        fullWidth 
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        />
                    <Button type="submit" onClick={(e)=>{e.preventDefault();console.log(e)}} variant="contained" style={{textTransform:"uppercase"}}>Random</Button>
                </div>
                <Button type="submit" onClick={()=>{if(!name){alert("please enter a name to continue"); return;}dispatch(setUser(name));navigate("/home");}} variant="contained" style={{textTransform:"uppercase",marginTop:"20px"}}>Continue</Button>
            </div>
        </div>
    )
}