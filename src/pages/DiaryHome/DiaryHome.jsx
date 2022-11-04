import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import './DiaryHome.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DiaryCard from '../../components/DiaryCard/DiaryCard'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Button from '../../components/Buttons/Button'
import TextField from '../../components/TextField/TextField'

const Item = styled(Paper)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //...theme.typography.body2,
    //padding: theme.spacing(1),
    //textAlign: 'center',
    //color: theme.palette.text.secondary,
    maxWidth:345
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    //maxWidth:'100%',
    //height:'9rem',
    backgroundColor:'#09aee8'
  }));
  
const DiaryHome = () => {

  // collaps functions
  const[style,setStyle]=useState('9rem');
  const[btnVisibility,setbtnVisibility]=useState('none');
  const[textFieldLength,settextFieldLength]=useState('25rem');
  const[duration,setDuaration]=useState()
  function expandField(){
      setStyle('21rem')
      setbtnVisibility('block')
      settextFieldLength('75rem')
      setDuaration('1s')
  }


  //btn function
  function submitNewCard(){
    setStyle('9rem')
    setbtnVisibility('none')
    settextFieldLength('25rem')
    setDuaration('1s')
  }

  return (
    <>
    {/* header bar */}
      <Grid className='mainGrid' item lg={12}>
          <Item><HeaderBar className='navBar'/></Item>
        </Grid>

        {/* main grid */}
    <div className='DiaryHome' >
         <Grid style={{margin: '2rem',position:'relative'}} container spacing={1}>

            {/* text input area */}
         <Grid className='textInputArea' xs={12}>
          <Item2 className='content'   style={{width:'100%',height:style,transition:'all',transitionDuration:duration}}>

            <h1 style={{display:'flex',color:'white'}}>Home</h1>

            <TextField
            style={{
              display:'flex',
              width: '98%',
              height:'5rem',
              borderRadius:'10px',
              backgroundColor:'#09aee8',
              border:'1px solid transparent',
              color:'black',
              fontSize:'18px',
              position:'relative',
              left:'1rem',}}
              style2={{
                width:textFieldLength,
                transition:'all',
                transitionDuration:duration
              }}
              onClick={(e)=>{expandField()}}
              hintText="Type"
            className="textField" 
            placeHolder="Your Nickname" 
            // value={userName}
            // onChange={e=>{setUserName(e.target.value)}}
            />
  
        <Button variant="contained"
         style1={{display:"inline-block", top: '9rem',position: 'absolute',left: '80rem',display:btnVisibility}} 
         style2={{border:' 1px solid transparent',borderRadius: '25px',top:'-2rem',height:'2rem'}}
        className="submitBtn" placeHolder='SUBMIT' onClick={()=>{submitNewCard()}}/>

            <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Enter Description" 
            style={{ width: '98%',
            height:'10rem',
            borderRadius:'10px',
            backgroundColor:'rgb(80 198 239)',
            border:'1px solid transparent',
            color:'black',
            fontSize:'18px' }} />
            </Item2>
         </Grid>


          {/*cards*/}
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>

        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>
        <Grid item xs={3}>
          <Item><DiaryCard/></Item>
        </Grid>

        


        
      </Grid>
    </div>
    </>
  )
}

export default DiaryHome