import React from "react";
import * as ReactDOM from 'react-dom';
import { Grid, OutlinedInput, Button, Container, Typography } from "@mui/material";
import "./DiaryHome.css"
import DiaryCard from "../../components/DiaryCard/DiaryCard";
import { getCards, addCard } from "./DiaryHomeSlice";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';




export default function DiaryHome() {

    const dispatch = useDispatch();
    const cards = useSelector(state => state.diaryHome.cards);
    const nickname = useSelector(state => state.signIn.nickname);
    const error = useSelector(state => state.diaryHome.error);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [open, setOpen] = useState(false);


    useEffect(() => {

        document.title = "Dear Diary - Home";
        const title = document.getElementById("title");
        const textArea = document.getElementById("textArea");
        const description = document.getElementById("description");
        const diaryHomeBtn = document.getElementById("diaryHomeBtn");
        window.onclick = (e) => {
            if (e.target === title || e.target === description) {
                ReactDOM.findDOMNode(title).parentElement.className = "text textSubmitExpand";
                ReactDOM.findDOMNode(textArea).className = "visible";
                ReactDOM.findDOMNode(diaryHomeBtn).className = "diaryHomeBtn visible";
            } else {
                ReactDOM.findDOMNode(title).parentElement.className = "text textSubmitCollapse";
                ReactDOM.findDOMNode(textArea).className = "hidden";
                ReactDOM.findDOMNode(diaryHomeBtn).className = "diaryHomeBtn hidden";
            }
        }
        dispatch(getCards());


    }, []);

    useEffect(() => {
        (title === "" || description === "") ? setDisabled(true) : setDisabled(false);
    }, [title, description]);

    useEffect(() => {
        (error === "") ? setOpen(false) : setOpen(true);
    }, [error]);



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
                created: new Date()

            }

            dispatch(addCard({ card }))
            setTitle("");
            setDescription("");
        }

    }




    return (

        <Grid className="containerDiaryHome" top="0vh" >
            <Container maxWidth='xl'>
                <Grid marginTop="60px">
                    <Typography variant="h4" marginTop={'2vh'} fontWeight="bold" color={"white"}>Home</Typography>

                </Grid>

                <Grid className="addFormSection1">
                    <OutlinedInput
                        id="title"
                        className="text textSubmitCollapse"
                        value={title}
                        size="small"
                        placeholder="Submit New"
                        onChange={(e) => { setTitle(e.target.value); }}

                    />
                    <Button
                        id="diaryHomeBtn"
                        className="diaryHomeBtn hidden "
                        variant="contained"
                        onClick={submitCard}
                        disabled={disabled}
                    >SUBMIT</Button>
                </Grid>
                <Grid id="textArea" className="hidden" >
                    <OutlinedInput
                        id="description"
                        className="text"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        fullWidth
                        multiline={true}
                        rows="6"
                        placeholder="Enter Description"

                    />
                </Grid>

                <Grid container spacing={1} marginTop='1vh'>
                    {

                        cards.map((card) => <Grid paddingLeft={0} key={card.id} item xs={12} sm={6} md={4} lg={3}><DiaryCard description={card.description} title={card.title} subTitle={card.user} color="hwb(196deg 75% 0%)" /></Grid>)

                    }

                </Grid>

                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                    <Alert severity="error">{error}</Alert>
                </Snackbar>
            </Container>
        </Grid>
    );
}