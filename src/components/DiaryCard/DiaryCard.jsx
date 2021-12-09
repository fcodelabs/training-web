import React, {useState} from 'react'
import Button from '@mui/material/Button'
import './DiaryCard.css'

export const DiaryCard = ({props}) => {

    const [buttonClicked, setButtonClicked] = useState(false)
    let title = props.title
    let name = props.name
    let description = props.description
    let desc = ''
    let backgroundColor = props.color

    if(!buttonClicked && description.length < 100){
        desc = description
    }
    if(!buttonClicked && description.length > 100){
        desc = description.substr(0,100) + "..."
    }
    if(buttonClicked){
        desc = description
    }

    return (
        <div className="card lg" style={{background: backgroundColor}}>
            <div className="cardContent">
                <div className="headers">
                    <div className="title">
                        <h2 className="cardTitle">{title}</h2>
                        <p className="subTitle text">{name}</p>
                        <p className="description text">{desc}</p>
                    </div>
                    <div className="btnClass">
                        <Button
                            style={{borderRadius: '15px', fontWeight:'600', color:'#171d1f'}}
                            onClick = {() => setButtonClicked(!buttonClicked)} 
                            className="showMore">{!buttonClicked ? "Show More" : "Show Less"}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}



