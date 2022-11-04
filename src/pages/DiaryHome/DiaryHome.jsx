import React, { useState } from "react";
import { Grid, OutlinedInput, Button, Container } from "@mui/material";
import "./DiaryHome.css"
import img from './img.jpg'
import { display, width } from "@mui/system";

export default function DiaryHome() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [visibility, setVisibility] = useState("none");
    const [titleClicked, setTitleClicked] = useState(false);
    const [width,setWidth]=useState("")

    function submit() {
        console.log("Title :" + title);
        console.log("Description :" + description);
        setDescription("");
        setTitle("");
    }


    window.onclick = () => {
        if (!titleClicked) {
            setVisibility("none");
            setWidth("30%");
        }
        setTitleClicked(false);
        
    }

    return (

        <Grid className="container" >


            <Container >

                <Grid style={{ display: "flex", justifyContent: 'space-between', margin: '3vh' }}>
                    <OutlinedInput
                        className="text"
                        value={title}
                        size="small"
                        placeholder="Submit New"
                        onChange={(e) => { setTitle(e.target.value) }}
                        onClick={(e) => {
                            setTitleClicked(true); 
                            setWidth("80%");
                            setVisibility("block"); 
                        }}
                        style={{ width:width,transition:'width 2s'}}
                      
                    />

                    <Button
                        className="btn"
                        variant="contained"
                        style={{display: visibility,transition:'display 2s'}}
                        onClick={submit}
                    >SUBMIT</Button>
                </Grid>
                <Grid style={{ margin: '3vh' }}>
                    <OutlinedInput
                        className="text"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        onClick={() => { setTitleClicked(true); }}
                        fullWidth
                        multiline="true"
                        rows="6"
                        placeholder="Enter Description"
                        style={{display:visibility,width:'100%',transition:'display 2s'}}
                      />
                </Grid>

            </Container>
        </Grid>
    );
}