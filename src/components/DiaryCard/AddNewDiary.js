import React, {useState} from 'react';
import classes from './AddNewDiary.module.css'
import Card from "@material-ui/core/Card";


function AddNewDiary(props) {

    //states
    useState({
        title:'',
        author:'',
        description:''
    })



    function submitDataHandler() {

    }


    return (
        <Card className={classes.card}>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor='title'>
                         Topic
                    </label>
                    <input placeholder='Topic' type='text' required id='title' onChange={titleHandler}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='author'>
                        Subtopic
                    </label>
                    <input placeholder='Subtopic' type='text' required id='author' onChange={authorHandler}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>
                        Description
                    </label>
                    <textarea placeholder='Description' id='description' required rows='5' onChange={descriptionHandler}>

                    </textarea>
                    <div className={classes.actions}>
                        <button onClick={submitDataHandler}>Add Your Diary</button>
                    </div>
                </div>
            </form>
        </Card>
    );
}

export default AddNewDiary;