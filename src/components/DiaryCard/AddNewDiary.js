import React, {useState} from 'react';
import classes from './AddNewDiary.module.css'
import Card from "@material-ui/core/Card";


function AddNewDiary(props) {

    //states
    const [diaryData, setDiaryData] = useState({
        title: '',
        author: '',
        description: ''
    })

    function sendDiaryDataHandler() {
        console.log(diaryData);
    }


    function submitDataHandler(event) {
        event.preventDefault();
    }

    return (
        <Card className={classes.card}>
            <form className={classes.form} onSubmit={submitDataHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>
                        Topic
                    </label>
                    <input placeholder='Topic' type='text' required id='title' onChange={(e) => {
                        setDiaryData(prevState => ({...prevState, title: e.target.value}))
                    }}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='author'>
                        Subtopic
                    </label>
                    <input placeholder='Subtopic' type='text' required id='author' onChange={(e) => {
                        setDiaryData(prevState => ({...prevState, author: e.target.value}))
                    }}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>
                        Description
                    </label>
                    <textarea placeholder='Description' id='description' required rows='5' onChange={(e) => {
                        setDiaryData(prevState => ({...prevState, description: e.target.value}))
                    }}>

                    </textarea>
                    <div className={classes.actions}>
                        <button onClick={sendDiaryDataHandler}>Add Your Diary</button>
                    </div>
                </div>
            </form>
        </Card>
    );
}

export default AddNewDiary;