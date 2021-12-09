import React from 'react';
import './diaryHome.css';
import { useState } from 'react';

export default function DiaryHome() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const data = {
            title,
            description
        }
        setTitle('');
        setDescription('');
        console.log(data);
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
        </div>
    )
}
