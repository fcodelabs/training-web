import React, {useState} from 'react';
import classes from './AddNewDiary.module.css'
import Card from "@material-ui/core/Card";


function AddNewDiary() {

    //states
    const [diaryData, setDiaryData] = useState({
        title: '',
        description: ''
    })

    const allData=[{
        title:diaryData.title,
        description:diaryData.description
    }]


    function submitDataHandler() {
        if (diaryData.title===''){
            console.log("Title Missing")
        }else if(diaryData.description===''){
            console.log('Description Missing')
        }else {
            console.log(allData)
        }

    }

    function preventHandler(event) {
        event.preventDefault()

    }

    return (
        <div>
            <Card className={classes.card}>
                <form className={classes.form} onSubmit={preventHandler}>
                    <div className={classes.control}>
                        <label htmlFor='title'>Topic</label>
                        <input placeholder='Topic' type='text' value={diaryData.title} required id='title' onChange={(e) => {setDiaryData(prevState => ({...prevState, title: e.target.value}))}}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='description'>Description</label>
                        <textarea placeholder='Description' id='description' value={diaryData.description} required rows='5' onChange={(e) => {setDiaryData(prevState => ({...prevState, description: e.target.value}))}}> </textarea>
                        <div className={classes.actions}>
                            <button onClick={submitDataHandler}>Add Your Diary</button>
                        </div>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default AddNewDiary;

