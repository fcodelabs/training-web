import { Typography,TextField,Button } from "@mui/material";
import {useState} from "react";
import {db} from "./firebase";
import {collection,addDoc} from "firebase/firestore"

export default function DiaryCard(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        if(title==="" && description===""){
            alert("error");
            return ;
        }
        const res = await addDoc(collection(db,"diarycards"),{
            title,description
        });
        console.log("data has been posted!",res);
        setTitle("");
        setDescription("");
    }
    return(
        <div style={{textAlign:"start",color:"white",padding:"20px",}}>
            <Typography variant="h4">Home</Typography>
            <form style={{marginTop:"20px",display:"flex",flexDirection:"column",gap:"15px"}}>
                <div style={{display:"flex", gap:"10px"}}>
                <TextField 
                    fullWidth 
                    id="outlined-basic" 
                    label="Submit New" 
                    variant="outlined"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)} 
                    />
                    <Button type="submit" onClick={(e)=>handleSubmit(e)} variant="contained">Submit</Button>
                </div>
                <TextField
                    fullWidth 
                    placeholder="Enter Description"
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)} 
                />
            </form>
        </div>
    )
}