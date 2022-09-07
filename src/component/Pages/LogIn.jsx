import { Typography,TextField,Button } from "@mui/material"

export default function LogIn(){

    return(
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"100%",height:"100vh"}}>
            <div style={{borderRadius:"5px",boxShadow:"2px 2px 5px",background:"white",padding:"5px",textAlign:'center'}}>
                <Typography variant="h6" style={{textAlign:"start"}}>Dear Diary</Typography>
                <Typography variant="h3" style={{color:"#039BE5"}}>Sign In</Typography>
                <div style={{display:"flex",gap:"10px"}}>
                    <TextField 
                        fullWidth 
                        id="outlined-basic" 
                        label="Submit New" 
                        variant="outlined" 
                        />
                    <Button type="submit" onClick={(e)=>{e.preventDefault();console.log(e)}} variant="contained" style={{textTransform:"uppercase"}}>Random</Button>
                </div>
                <Button type="submit" onClick={(e)=>{e.preventDefault();console.log(e)}} variant="contained" style={{textTransform:"uppercase",marginTop:"20px"}}>Continue</Button>
            </div>
        </div>
    )
}