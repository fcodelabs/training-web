import React from 'react';
import './diaryHome.css';
import { useState} from 'react';
import DiaryCard from '../DiaryCard/DiaryCard';

export default function DiaryHome() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [cards, setCards] = useState([]);
    let cards = JSON.parse(localStorage.getItem("cards") || "[]");

    const handleSubmit = () => {
        if(title.trim().length !== 0 && description.trim().length !== 0){
            const card = {
                title,
                description
            }
            cards.push(card)
        }  
        setTitle('');
        setDescription('');
        localStorage.setItem("cards", JSON.stringify(cards));
        console.log(cards);
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
                    onChange={(e) => setTitle(e.target.value) }
                ></input>

                <textarea
                    className='createTextarea'
                    type="text"
                    required
                    placeholder='Enter Description'
                    value={description}
                    onChange={ (e) => setDescription(e.target.value) }
                ></textarea>
            </form>
            <button className='createButton' onClick={handleSubmit}>SUBMIT</button>
            <div className='App'>
                {cards && cards.map( (card, index) => <DiaryCard key={index} title={card.title} subtitle="Noah" description={card.description} color="#AFEEEE"/>)}
            </div>
        </div>
    )
}
