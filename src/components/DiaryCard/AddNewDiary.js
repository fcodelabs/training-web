import React, {useState} from 'react';
import classes from './AddNewDiary.module.css'
import Card from "@material-ui/core/Card";

function AddNewDiary() {

    //states
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('')


    const allData=[{
        title:title,
        description:description
    }]


    function submitDataHandler() {
        if (title===''){
            console.log("Title Missing")
        }else if(description===''){
            console.log('Description Missing')
        }else {
            console.log(allData)
        }
    }

    function preventHandler(event) {
        event.preventDefault()

    }

    //functions for get  values
    function titleValueHandler(event) {
        setTitle(event.target.value)
    }

    function descriptionValueHandler(event) {
        setDescription(event.target.value)
    }


    return (
        <div>
            <Card className={classes.card}>
                <form className={classes.form} onSubmit={preventHandler}>
                    <div className={classes.control}>
                        <label htmlFor='title'> Topic </label>
                        <input placeholder='Topic' type='text' value={title} required id='title' onChange={titleValueHandler}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='description'> Description </label>
                        <textarea placeholder='Description' id='description' value={description} required rows='5' onChange={descriptionValueHandler}>
                    </textarea>
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
