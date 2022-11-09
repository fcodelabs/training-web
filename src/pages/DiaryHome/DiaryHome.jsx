import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled, alpha } from '@mui/material/styles';

import './DiaryHome.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DiaryCard from '../../components/DiaryCard/DiaryCard'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Button from '../../components/Buttons/Button'
import TextField from '../../components/TextField/TextField'

import { useSelector,useDispatch } from 'react-redux';


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
 

 //(local state)====================
  //const[txtAreaStyle,setTxtAreaStyle]=useState('9rem');
  //const[descVisiility,setDescVisiility]=useState('none');
  //const[btnVisibility,setBtnVisibility]=useState('none');
  //const[textFieldLength,settextFieldLength]=useState('25rem');
 // const[duration,setDuaration]=useState()
  const [card, setCard] = useState([]);
  //const [title, setTitle] = useState("");
  //const [description, setDescription] = useState("");

  //(global state(redux))====================
  const descVisiility=useSelector((state)=>state.diaryHome.descVisiility)
  const btnVisibility=useSelector((state)=>state.diaryHome.btnVisibility)
  const txtAreaStyle=useSelector((state)=>state.diaryHome.txtAreaStyle)
  const textFieldLength=useSelector((state)=>state.diaryHome.textFieldLength)
  const duration=useSelector((state)=>state.diaryHome.duration)
  const title=useSelector((state)=>state.diaryHome.title)
  const description=useSelector((state)=>state.diaryHome.description)
  //const card=useSelector((state)=>state.diaryHome.card)
  const dispatch=useDispatch()

  //expand 
  function expandField(){
       // setTxtAreaStyle('21rem')
      //setBtnVisibility('block')
     // setDescVisiility('inline')
     // settextFieldLength('75rem')
     // setDuaration('1s')

      dispatch({type:'descVisiility',value:'inline'})
      dispatch({type:'btnVisibility',value:'block'})
      dispatch({type:'txtAreaStyle',value:'21rem'})
      dispatch({type:'textFieldLength',value:'75rem'})
      dispatch({type:'duration',value:'1s'})
  }


//get username
  //const location=useLocation();
  //const data=location.state.data;
  const data=useSelector((state)=>state.signInPage.userName)

  //btn function
  function submitNewCard(){
       //setTxtAreaStyle('9rem')
      //setBtnVisibility('none') 
     //setDescVisiility('none')
    //settextFieldLength('25rem')
    //setDuaration('1s')

    dispatch({type:'descVisiility',value:'none'})
    dispatch({type:'btnVisibility',value:'none'})
    dispatch({type:'txtAreaStyle',value:'9rem'})
    dispatch({type:'textFieldLength',value:'25rem'})
    dispatch({type:'duration',value:'1s'})
   
    console.log(data)

    if(title==""){
      console.log("Missing title")
  }else if( description==""){
    console.log("Missing description")
  }else{
    setCard(card.concat(
      <Grid item xs={3}>
      <Item><DiaryCard 
       title={title} 
      name={data} 
       description={description}/></Item>
      </Grid>
    ))
  }

    //setTitle('')
    //setDescription('')
    dispatch({type:'title',value:''})
    dispatch({type:'description',value:''})
  }

  return (
    <>
    {/* header bar */}
      <Grid container className='mainGrid' item lg={12}>
          <Item><HeaderBar className='navBar'/></Item>
        </Grid>

        {/* main grid */}
    <div className='DiaryHome' >
         <Grid style={{margin: '2rem',position:'relative'}} container spacing={1}>

            {/* text input area */}
         <Grid className='textInputArea' item xs={12}>
          <Item2 className='content'   style={{width:'100%',height:txtAreaStyle,transition:'all',transitionDuration:duration}}>

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
            placeHolder="Submit New" 
             value={title}
             onChange={e=>{dispatch({type:'title',value:e.target.value})}}
            />
  
        <Button variant="contained"
         style1={{display:"inline-block", top: '9rem',position: 'absolute',left: '80rem',display:btnVisibility}} 
         style2={{border:' 1px solid transparent',borderRadius: '25px',top:'-2rem',height:'2rem'}}
        className="submitBtn" placeHolder='SUBMIT' onClick={()=>{submitNewCard()}}/>

            <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Enter Description" 
            style={{ 
            width: '98%',
            height:'10rem',
            borderRadius:'10px',
            backgroundColor:'rgb(80 198 239)',
            border:'1px solid transparent',
            color:'black',
            fontSize:'18px' ,
            display:descVisiility
            }} 
            value={description}
             onChange={e=>{dispatch({type:'description',value:e.target.value})}}
            />
            </Item2>
         </Grid>


          {/*cards*/}
           <Grid item xs={3}>
              <Item><DiaryCard 
               title={"hello"} 
              name={'kasun'} 
               description={'loremfsgsfgs sfgsfgs sfgsfgsfg sfsfgswrsfbxsdadgtsloremfsgsfgs sfgsfgs sfgsfgsfg sfsfgswrsfbxsdadgtsloremfsgsfgs sfgsfgs sfgsfgsfg sfsfgswrsfbxsdadgts'}/></Item>
              </Grid>

              {card}
       
        {/* <Grid item xs={3}>
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
        </Grid> */}
      </Grid>
    </div>
    </>
  )
}

export default DiaryHome