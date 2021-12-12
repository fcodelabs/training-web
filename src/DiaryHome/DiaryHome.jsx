import React from 'react';
import './diaryHome.css';
import DiaryCard from '../DiaryCard/DiaryCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTitle, getDescription, getCards } from '../Components/store';

export default function DiaryHome() {
    const dispatch = useDispatch();
    const title = useSelector(getTitle);
    const description = useSelector(getDescription);
    const cards = useSelector(getCards);

    const handleSubmit = () => {
        if(title.trim().length !== 0 && description.trim().length !== 0){
            const card = {
                title,
                description
            }
            dispatch({type: "newCard", payload: card});
            dispatch({ type: "titleChanged", payload: ''});
            dispatch({type: "descriptionChanged", payload: ''});
        }  
    }

    function setTitle(e){
        dispatch({ type: "titleChanged", payload: e.target.value});
    }

    function setDescription(e){
        dispatch({type: "descriptionChanged", payload: e.target.value});
    }

    return (
        <div className='create'>
            <form>
                <input
                    className='createInput'
                    type="text"
                    required
                    placeholder='Submit New'
                    value={title}
                    onChange={setTitle}
                ></input>

                <textarea
                    className='createTextarea'
                    type="text"
                    required
                    placeholder='Enter Description'
                    value={description}
                    onChange={setDescription}
                ></textarea>
            </form>
            <button className='createButton' onClick={handleSubmit}>SUBMIT</button>
            
            <div className='App'>
                {cards && cards.map((card, index) => <DiaryCard key={index} title={card.title} subtitle="Noah" description={card.description} color="#AFEEEE"/>)}
            </div>
        </div>
    )
}
