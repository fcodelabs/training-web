import React from 'react';
import DiaryCard from "./DiaryCard";
import classes from './DiaryCardList.module.css'
import Masonry from "react-masonry-css";


function DiaryCardList(props) {
    return (

        <div className={classes.cards}>
            {props.dcards.map(card =>
                <DiaryCard
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    author={card.author}
                    description={card.description}
                />)}
        </div>

    );
}

export default DiaryCardList;