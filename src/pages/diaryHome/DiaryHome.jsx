import React, {useState} from 'react'
import Button from '@mui/material/Button'
import './DiaryHome.css'


export const DiaryHome = () => {

    const [onClicked, setOnClicked] = useState(false)
    const [title, handleTitle] = useState('')
    const [description, handleDescription] = useState('')

    let inputWidth = '40%'
    let decHieght = '0'
    if(onClicked){
        decHieght = '150px'
        inputWidth = '100%'
    }

    const handleInputs =() =>{
        console.log(title);
        console.log(description);
        handleTitle('')
        handleDescription('')
    }

    return (
        <div className='inputContainer'>
            <div className='content'>
                <form className='cardForm'>
                    <div className='titleButton'>
                        <div className='cardFormTitle'>
                            <input
                                name="Cardtitle"
                                value={title}
                                style={{width:inputWidth, transition: 'width 500ms ease-out'}}
                                onClick = {() => setOnClicked(!onClicked)} 
                                onChange={ (e) => handleTitle(e.target.value)}
                                className='inputTitle'
                                type="text"
                                placeholder='Submit New'
                                required
                            ></input>
                        </div>
                        <div className='cardSubButton'>
                            {onClicked && <Button onClick={handleInputs}>Submit</Button>}
                        </div>
                    </div>

                    <div className='decText'>
                        <textarea
                            name="cardDescription"
                            value={description}
                            hidden={!onClicked}
                            style={{transition: 'height 500ms ease-out', padding:'15px', fontFamily:'sans-serif', resize: 'none'}}
                            className='inputDescription' 
                            onChange={ (e) => handleDescription(e.target.value)}
                            rows={6}
                            type="text"
                            placeholder='Enter Description'
                            name="description" 
                            wrap='physical'
                        ></textarea>
                    </div>
                </form>
            </div>  
        </div>
    )
}
