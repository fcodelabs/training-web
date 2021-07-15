import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import DiaryCard from '../Components/DiaryCard';
import DiaryHome from "../Components/DiaryHome";
import { Grid } from '@material-ui/core';
import MenuAppBar from "../Components/NavBar";

function Home() {
      useEffect(() => {
        dispatch({ type: "getCards" });
    })

    //read input data
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    //Dispatch
    const dispatch = useDispatch();

    //Subscribe
    const uname = useSelector(state => state.crd.name);
    const cards = useSelector(state => state.crd.cards);

    function onClick(e) {
        e.preventDefault();

        if (newTitle.trim().length === 0) {
            console.log("Title is missing");
            return
        }
        if (newDescription.trim().length === 0) {
            console.log("Description is missing")
            return
        }
        else {
            dispatch({ type: "addNew", sendTitle: newTitle, sendDescription: newDescription, user: uname });
            setNewTitle("");
            setNewDescription("")
           
        }
    }


    return (
        <div className="App">
            <MenuAppBar/>
           
            <DiaryHome
                onChangeTitle={(e) => { setNewTitle(e.target.value) }}
                onChangeDescription={(e) => { setNewDescription(e.target.value) }}
                title={newTitle}
                description={newDescription}
                onClick={onClick}
            />

            <Grid container>

                {
                    cards.map((cards, index) => {

                        return (
                            <Grid item xs={12} md={3} key={index + 1}>
                                <DiaryCard title={cards.title} subtitle={cards.subtitle} description={cards.description} color={"#bbdefb"} />
                            </Grid>
                        )
                    })
                }

            </Grid>

        </div>
    );
}


export default Home;
