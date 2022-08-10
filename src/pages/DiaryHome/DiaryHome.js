import '../../utils/diaryHome.css';
import hbimg from '../../asset/images/bimg.jpg';

import { useParams } from 'react-router-dom';
import DiaryCard from '../../component/DiaryCard/DiaryCard';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

//import { createSlice } from '@reduxjs/toolkit'
import {useDispatch, useSelector} from 'react-redux';

import { onSubmit } from '../../Redux/slices/dataSlice';
import { dataActions } from '../../Redux/slices/dataSlice';
import { selectCard } from '../../Redux/slices/dataSlice';

//import {useRef} from 'react';
//import firestore from '../../firestore/firebase';
import {addDoc, collection} from '@firebase/firestore';
import { onSnapshot } from '@firebase/firestore';
import { useEffect } from 'react';
import {doc} from '../../firestore/firebase';


const { useState } = React;

const useStyles = makeStyles((theme) => ({
    root: 
    {
      
      '& > *': {
        margin: theme.spacing(1),
        //width: '25ch',
        //borderRadius:'50%',
      },
      '& .MuiTextField-root': {
        //margin: theme.spacing(1),
        width: '85vw',
      },
    },
  }));


function DiaryHome()
{
    let { name } = useParams();
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    //const [myArray, updateMyArray] = useState([]);

    const dispatch = useDispatch();
    
    const cards = useSelector(selectCard)
    //console.log(cards)
    

  
    const handleSubmit=(e)=>{
        e.preventDefault();
        //e.target.reset();
        //const submitNew=e.target.title.value;
        //const description=e.target.description.value;
       
        

        const title=e.target.title.value;
        const description=e.target.description.value;
        if(title !== "" && description !== ""){
          dispatch(dataActions.addCard({name,title,description}));
        }
       // dispatch(dataActions.addCard({title,description}));
       

        console.log("Title :"+title);
        console.log("Description :"+description);

        // let data = {
        //   name : name,
        //   title : title,
        //   description : description,

        // };

        // try{
        //   addDoc(ref, data)
        // }
        // catch(c){
        //   console.log(c)
        // }

        
      

        if(title === "" || description === ""){
          if(title === ""){
            console.log("Missing title")
          }
          if(description === ""){
            console.log("Missing Description")

          }
          return;
        }
        

        //  updateMyArray( arr => [...arr,
        //   {title:submitNew, description:description} 
        //  ]);

        

      e.target.title.value="";
      e.target.description.value="";

    }

     const [card, setCard] = useState(null)

      

      useEffect(() => {

       let newCards = [];

       onSnapshot(doc, (snapshot) => {
         newCards = [];
         snapshot.docs.forEach(doc => {
           newCards.push(doc.data());
         });
         console.log(newCards)

         dispatch(dataActions.saveCards(newCards));
       });
      }, [dispatch]);

   

    return(
        <div className="DiaryHome">
          
          {/* <img src={hbimg} id="homeBimg"></img>  */}
          
           
            <div className="headerHome">
            <h1 id="h1home">Home</h1>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                
                   <TextField id="filled-basic" name="title" label="Submit New" variant="filled"/>
                   
                   <div>
                   <TextField id="filled-multiline-static" name="description"
                     label="Enter Description"
                     multiline
                     rows={4}
                     variant="filled"/>
                     <Button variant="contained" color="primary" type="submit" id="btn"> Submit</Button>
      
                   </div>
        
                </form>

            </div>
            

            <div className="diaryHomeBody">
              {/* {myArray.map( a =>
               <div>
                <DiaryCard title={a.title} name={name} description={a.description}/>

                  
               </div>
            )}  */}

               <div>
                {cards.map(a =>
                  <DiaryCard title={a.title} name={a.name} description={a.description}/>
                
                )}

                </div>  
               
                
            </div>

        </div>

    );
}
export default DiaryHome;