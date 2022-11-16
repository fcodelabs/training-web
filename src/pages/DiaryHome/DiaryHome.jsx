import React from "react";
import { Grid, OutlinedInput, Button, Container, Typography } from "@mui/material";
import "./DiaryHome.css"
import DiaryCard from "../../components/DiaryCard/DiaryCard";
import {getCards, addCard } from "./DiaryHomeSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect,useState } from "react";




export default function DiaryHome() {

    const dispatch = useDispatch();
    const cards = useSelector(state => state.diaryHome.cards);
    const nickname = useSelector(state => state.signIn.nickname);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [visibility,setVisibility]=useState("none");
    const [width,setWidth]=useState("");
  

    useEffect(() => {
        dispatch(getCards());
    }, []);

    useEffect(() => {
        window.onclick = (e) => {
            if (e.target.id==="expand") {
                setVisibility("block");
                setWidth("80%")
            }else{
                setVisibility("none");
                setWidth("30%")   
            }
            
        }

    })

    function submitCard() {
        if (title === "") {
            console.log("Missing title");
        } else if (description === "") {
            console.log("Missing description");
        } else {
           
            const card = {
                title: title,
                description: description,
                user: nickname,
                created:new Date()

            }
            
            dispatch(addCard({card}))
            setTitle("");
            setDescription("");
        }

    }




    return (

        <Grid className="container" top="0vh">
            <Container maxWidth='xl'>
                <Grid marginTop="60px">
                    <Typography variant="h4" marginTop={'2vh'} fontWeight="bold" color={"white"}>Home</Typography>

                </Grid>

                <Grid style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '1vh' }}>
                    <OutlinedInput
                        id="expand"
                        className="text"
                        value={title}
                        size="small"
                        placeholder="Submit New"
                        onChange={(e) => {setTitle(e.target.value)}}
                        style={{ borderRadius: "30px", width: width, transition: 'width 2s' }}

                    />
                    <Button
                        className="btn"
                        variant="contained"
                        style={{ display: visibility, transition: 'display 2s' }}
                        onClick={submitCard}
                    >SUBMIT</Button>
                </Grid>
                <Grid marginTop='1vh' >
                    <OutlinedInput
                        id="expand"
                        className="text"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value)}}
                        fullWidth
                        multiline={true}
                        rows="6"
                        placeholder="Enter Description"
                        style={{ borderRadius: "10px", display: visibility, width: '100%', transition: 'display 2s' }}
                    />
                </Grid>

                <Grid container spacing={1} marginTop='1vh'>
                    {

                        cards.map((card) => <Grid paddingLeft={0} key={card.id} item xs={12} sm={6} md={4} lg={3}><DiaryCard description={card.description} title={card.title} subTitle={card.user} color="hwb(196deg 75% 0%)" /></Grid>)

                    }

                </Grid>
            </Container>
        </Grid>
    );
}