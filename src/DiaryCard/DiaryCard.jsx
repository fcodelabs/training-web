import React from 'react';
import './DiaryCard.css';
import '../App.css';
import { useState } from 'react';

export default function DiaryCard(props) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    }

    return (
        <div className="card" style={{backgroundColor: props.color}} align="left">
            <div className="cardBody">
                <h2 className="cardTitle">{props.title}</h2>
                <h4 className="subTitle">{props.subtitle}</h4>
                {clicked ? <p className="cardDescription">{props.description}</p>
                    : (props.description.length <= 100 ? (<p className="cardDescription">{props.description}</p>) : 
                    <p className="cardDescription">{props.description.substring(0,100)+"..."}</p>)}
                <button className="cardButton" onClick={handleClick} >SHOW MORE</button>
            </div>    
        </div>
    )
}
