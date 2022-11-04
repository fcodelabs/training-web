import React,{StyleSheet, useEffect,useState} from 'react'
import './SignInPage.css'
import Button from '../../components/Buttons/Button'
import TextField from '../../components/TextField/TextField'
import { useNavigate } from 'react-router-dom'
import Logo from '../../utils/assets/star.jpg'
const SignInPage = () => {

    const navigate=useNavigate();

    const[userName,setUserName]=useState("");
    const[disabled,setDisable]=new useState(Boolean)

    useEffect(()=>{
        console.log(userName)
        if(userName==null || userName=="")
          setDisable(true)
        else  
          setDisable(false)
    },[userName])

function setRandomName(){
  // let r = (Math.random() + 1).toString(36).substring(7);
  // console.log("random", r);
 
  const randomName=["Lahiru","Abdul","Rashmi","Rishini"]
  let name=randomName[Math.floor(Math.random()*randomName.length)]
  setUserName(name) 
}

  return (
    <div className='SignInPage'>
       
        <div className="signInCard">
          <img className='logo' src={Logo} alt="" />
          <h4 className='title'>Dear Diary</h4>
        <h1>Sign In</h1>
        <TextField 
        className="textField" 
        placeHolder="Your Nickname" 
        style={{display:'inline-block'}}
        value={userName}
        onChange={e=>{setUserName(e.target.value)}}
        />
       
        <Button variant="contained"
         style1={{display:"inline-block"}} 
         style2={{border:' 1px solid transparent',borderRadius: '25px',top:'1rem',height:'2rem'}}
        className="randomBtn" placeHolder='RANDOM' onClick={()=>{setRandomName()}}/>


        <Button variant="contained" style={{display:"block"}} 
        style2={{border:' 1px solid transparent',borderRadius: '25px',top:'1rem',height:'2rem',left:'40%'}}
        className="signInBtn" placeHolder='CONTINUE' disabled={disabled} onClick={()=>{navigate("/DiaryHome")}}/>
        
        </div>
    </div>
  ) 
}

export default SignInPage
// ()=>{navigate("/Dashboard")}