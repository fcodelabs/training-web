import React, { useState } from "react";
import { Grid, OutlinedInput, Button, Container, Typography } from "@mui/material";
import "./DiaryHome.css"
import img from './img.jpg'
import { display, width } from "@mui/system";
import DiaryCard from "../../components/DiaryCard/DiaryCard";

export default function DiaryHome() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [visibility, setVisibility] = useState("none");
    const [titleClicked, setTitleClicked] = useState(false);
    const [width, setWidth] = useState("");
    const [cards, setCards] = useState([]);

    function submit() {
        localStorage.setItem("nickname", "rashmi");

        if (title == "") {
            console.log("Missing title");
        } else if (description == "") {
            console.log("Missing description");
        } else {
            let card = {
                title: title,
                description: description
            }

            let temp = cards;
            temp.push(card);
            setCards(temp);

            setDescription("");
            setTitle("");
        }

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


            <Container maxWidth>

                <Grid >
                    <Typography variant="h3" margin={'2vh'} fontWeight="bold" color={"white"}>Home</Typography>

                </Grid>


                <Grid style={{ display: "flex", justifyContent: 'space-between', margin: '1vh' }}>
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
                        style={{ borderRadius: "30px", width: width, transition: 'width 2s' }}

                    />

                    <Button
                        className="btn"
                        variant="contained"
                        style={{ display: visibility, transition: 'display 2s' }}
                        onClick={submit}
                    >SUBMIT</Button>
                </Grid>
                <Grid style={{ margin: '1vh' }}>
                    <OutlinedInput
                        className="text"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        onClick={() => { setTitleClicked(true); }}
                        fullWidth
                        multiline="true"
                        rows="6"
                        placeholder="Enter Description"
                        style={{ borderRadius: "10px", display: visibility, width: '100%', transition: 'display 2s' }}
                    />
                </Grid>

                <Grid container spacing={1}>
                    {
                        cards.map((card) => <Grid item xs={12} sm={6} md={4} lg={3}><DiaryCard  description={card.description} title={card.title} subTitle={localStorage.getItem("nickname")} color="#b3d4fc" /></Grid>)
                    }


                </Grid>

            </Container>
        </Grid>
    );
}