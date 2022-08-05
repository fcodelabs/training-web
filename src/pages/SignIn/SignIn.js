
import '../../utils/signIn.css';

import logo from "../../asset/images/logo.png";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {useState} from 'react';

//import {Link} from 'react-router-dom';
import { Switch, Routes, Route, useNavigate, useParams} from 'react-router-dom';
//import DiaryCard from '../DiaryHome/DiaryHome';
import DiaryHome from '../DiaryHome/DiaryHome';
import { renderIntoDocument } from 'react-dom/test-utils';

function SignIn() {

  const [randomName, setRandomName]=useState(null)
  const genName=()=>{
    const num=Math.floor(Math.random() * 5)
        
        let nameArr =['Nimal','Kamal','Peter','Saman','Jhon']
        setRandomName(nameArr[num])
  }

  const navigate = useNavigate();
  const navigateToDiaryCard = (e) => {
    
    navigate(`/diaryHome/${randomName}`);
    
  };

  
  
  return (
    <div className="App">
      

      <div className="contain">
      <div className="image">
          <img src={logo} width="50px" height="50px"></img>
        </div>
        <div className="dh2">
          <h2>Dear Diary</h2>
        </div>
        <div className="signInForm">
        <h1 id="sh1" text-align="center">Sign In</h1>
        
         {/* <input type="text" id="txt1" placeholder="Enter" value={randomName}></input>
        <input type="Button" id="btn1" value="RANDOM" onClick={genName}></input><br></br>
        
        <input type="Button" id="btn2" value="Continue" onClick={navigateToDiaryCard} disabled={randomName===null}></input> */}
        <TextField id="txt1" label="Your NickName" name="name" variant="outlined" value={randomName} onChange={event => setRandomName(event.target.value)}/>
        
        <Button variant="contained" id="btn1" onClick={genName}>RANDOM</Button>
        <Button variant="contained" id="btn2" onClick={navigateToDiaryCard} disabled={randomName===null}>Continue</Button>
        
        
        </div>
      </div>


    </div>
  );
}

export default SignIn;
