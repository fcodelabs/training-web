import React from 'react';
import './DiaryCard.css';
import '../App.css';

export default function DiaryCard(props) {

    return (
        <div className="card" style={{backgroundColor: props.color}} align="left">
            <div className="cardBody">
                <h2 className="cardTitle">{props.title}</h2>
                <h4 className="subTitle">{props.subtitle}</h4>
                {props.description.length <= 100 ? (<p className="cardDescription">{props.description}</p>) : 
                (<p className="cardDescription">{props.description.substring(0,100)+"..."}</p>)}
                <button className="cardButton">SHOW MORE</button>
            </div>    
        </div>
    )
}
