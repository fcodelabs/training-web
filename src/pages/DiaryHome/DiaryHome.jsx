import React from "react";
import { Grid, OutlinedInput, Button, Container, Typography } from "@mui/material";
import "./DiaryHome.css"
import DiaryCard from "../../components/DiaryCard/DiaryCard";
import { setTitle, collapse, titleIsNotClicked, titleIsClicked, expand, setDescription, getCards, addCard } from "./DiaryHomeSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";



export default function DiaryHome() {

    const dispatch = useDispatch();
    const cards = useSelector(state => state.diaryHome.cards);
    const title = useSelector(state => state.diaryHome.title);
    const description = useSelector(state => state.diaryHome.description);
    const titleClicked = useSelector(state => state.diaryHome.titleClicked);
    const visibility = useSelector(state => state.diaryHome.visibility);
    const width = useSelector(state => state.diaryHome.width);



    useEffect(() => {
        dispatch(getCards());
    },[]);

     function submitCard() {
        if (title === "") {
            console.log("Missing title");
        } else if (description === "") {
            console.log("Missing description");
        } else {

            let id=(cards==null)?"card-"+1:"card-"+(cards.length+1);
            let card = {
                
                title: title,
                description: description,
                user: localStorage.getItem("nickname")

            }
        
            dispatch(addCard({card,id}))
            dispatch(setTitle(""));
            dispatch(setDescription(""));
        }

    }


    window.onclick = () => {
        if (!titleClicked) {
            dispatch(collapse());
        }
        dispatch(titleIsNotClicked());

    }

    return (

        <Grid className="container" top="0vh">
            <Container maxWidth='xl'>
                <Grid marginTop="60px">
                    <Typography variant="h4" marginTop={'2vh'} fontWeight="bold" color={"white"}>Home</Typography>

                </Grid>

                <Grid style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '1vh' }}>
                    <OutlinedInput
                        className="text"
                        value={useSelector(state => state.diaryHome.title)}
                        size="small"
                        placeholder="Submit New"
                        onChange={(e) => { dispatch(setTitle(e.target.value)) }}
                        onClick={(e) => {
                            dispatch(titleIsClicked());
                            dispatch(expand());
                        }}
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
                        className="text"
                        value={useSelector(state => state.diaryHome.description)}
                        onChange={(e) => { dispatch(setDescription(e.target.value)) }}
                        onClick={() => { dispatch(titleIsClicked()) }}
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