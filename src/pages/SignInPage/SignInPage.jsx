import React,{ useEffect} from 'react'
import './SignInPage.css'
import Button from '../../components/Buttons/Button'
import TextField from '../../components/TextField/TextField'
import { useNavigate } from 'react-router-dom'
import Logo from '../../utils/assets/star.jpg'

import { useSelector,useDispatch } from 'react-redux';
import { enable,disable,setUserName } from './SignInPageSlice';

const SignInPage = () => {

    //const[userName,setUserName]=useState("");
    //const[disabled,setDisable]=new useState(Boolean)

const userName=useSelector((state)=>state.signInPage.userName)
const disabled=useSelector((state)=>state.signInPage.disabled)

const dispatch=useDispatch()

    useEffect(()=>{
        //console.log(userName)
        if(userName===null || userName==="") 
        dispatch(disable())
        else  
        dispatch(enable())
    },[userName])

    //page navigation
    const navigate=useNavigate();
    const openDiaryForm=(data)=>{
      navigate("/DiaryHome")
    }

function setRandomName(){
  // let r = (Math.random() + 1).toString(36).substring(7);
  // console.log("random", r);
 
  const randomName=["Lahiru","Abdul","Rashmi","Rishini"]
  let name=randomName[Math.floor(Math.random()*randomName.length)]
  //setUserName(name) 
  dispatch(setUserName(name))
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
        onChange={e=>{dispatch(setUserName(e.target.value))}}
        />
       
        <Button variant="contained"
         style1={{display:"inline-block"}} 
         style2={{border:' 1px solid transparent',borderRadius: '25px',top:'1rem',height:'2rem'}}
        className="randomBtn" placeHolder='RANDOM' onClick={()=>{setRandomName()}}/>


        <Button variant="contained" style={{display:"block"}} 
        style2={{border:' 1px solid transparent',borderRadius: '25px',top:'1rem',height:'2rem',left:'40%'}}
        className="signInBtn" placeHolder='CONTINUE' disabled={disabled} onClick={openDiaryForm}/>
        
        </div>
    </div>
  ) 
}

export default SignInPage
// ()=>{navigate("/Dashboard")}