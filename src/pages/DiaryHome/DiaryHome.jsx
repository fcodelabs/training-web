import React, { useState } from "react";
import { Grid, OutlinedInput, Button, Container } from "@mui/material";
import "./Styles.css"

export default function DiaryHome() {

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    function submit(){
        console.log("Title :" + title);
        console.log("Description :" + description);
        setDescription("");
        setTitle("");
    }

    return (
        <Container >
            
            <Grid style={{display:"flex",justifyContent:'space-between',margin:'3vh'}}>
                <OutlinedInput 
                    value={title} 
                    size="small" 
                    placeholder="Submit New" 
                    onChange={(e)=>{setTitle(e.target.value)}}
                    style={{ width:'80%',borderRadius: '30px', backgroundColor: "#b3d4fc" }} />

                <Button 
                    variant="contained" 
                    style={{width:'15%',borderRadius: '30px' }}
                    onClick={submit}
                >SUBMIT</Button>
            </Grid>
            <Grid  style={{margin:'3vh'}}>
                <OutlinedInput 
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                    fullWidth 
                    multiline="true" 
                    rows="6" 
                    placeholder="Enter Description" 
                    style={{borderRadius: '30px', backgroundColor: "#b3d4fc" }} />
            </Grid>

        </Container>
    );
}