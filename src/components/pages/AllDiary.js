import React from 'react';
import classes from './HomePage.module.css'
import DiaryCardList from "../DiaryCard/DiaryCardList";


const DUMMY_DATA = [
    {
        id: 'm1',
        title: "Test 01",
        author: "Gathsara",
        description: " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem"
    },
    {
        id: 'm2',
        title: "Test 02",
        author: "Gathsara",
        description: " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem"
    },
    {
        id: 'm3',
        title: "Test 03",
        author: "Gathsara",
        description: " Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem"
    }

]


function AllDiary(props) {
    return (

        <div className={classes.main}>
            <DiaryCardList dcards={DUMMY_DATA}/>
        </div>


    );
}

export default AllDiary;