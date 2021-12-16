import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './sass.scss';
import { useSelector ,useDispatch} from 'react-redux';
import DiaryCard from '../../../Components/DiaryCard/DiaryCard';
import { getCardActionsUtilityClass, Grid } from "@mui/material";
import addCard from '../Actions/addCard';
import { useEffect } from 'react';
import {getCards}  from '../Actions/getCards';





const DiaryHome=()=>{

    const[title,setTitle]=React.useState('')
    const[description,setDescription]=React.useState('')
    //const[timestamp,setTimestamp]=React.useState('')
    const cards = useSelector(state=>state.cards.cards);
    const dispatch=useDispatch();
    const loading=useSelector(state=>state.cards.loading);
    const error=useSelector(state=>state.cards.error);
   
    useEffect(()=>{
        (getCards());
    },[]);

    var timestamp=Date.now();

    const handleSubmit =(e) => {
        e.preventDefault()


        if(title && description){
           
            const card={
                title,
                description,
                timestamp
                
            }
            addCard(card);
            e.target.reset();
            setTitle('');
            setDescription('');
            
       

            
        }else if(description){
            console.log("Missing Title")
        }else if(title){
            console.log("Missing Description")
        }else{
            console.log("Missing Title")
            console.log("Missing Description")
            
        }
     
       
    }
    
    return (

        <div>

        <form noValidate onSubmit={handleSubmit}
        component="form"
        sx={{'& .MuiTextField-root': { m: 1 }, }}
        noValidate
        autoComplete="off"
      >


      <div className="firstRow">
      <br/>
      <TextField 
      value={title}
      required
      onChange={(e)=> setTitle(e.target.value)}
       className="inputRounded"  autoFocus id="input-card" placeholder="Submit New" type="text" variant="outlined" size="small" sx={{m:1,width:"94%" }}/>

       <Button style={{backgroundColor: 'rgb(28, 103, 243)', color: 'black'}} type ="submit" variant="contained" sx={ { borderRadius: 28,m:1} }>Submit</Button>
     
      </div>
      
      <br/>
      <div>
      <TextField 
      value={description} 
      required
      onChange={(e)=> setDescription(e.target.value)}
      className="inputRounded" fullWidth autoFocus id="input-description" placeholder="Enter Description" type="text" variant="outlined" multiline rows={5}/>
         
      </div>
      <br/>
      
</form>
    <div>
    <Grid container spacing={2}>
        {cards && cards.map((card,id)=>
            <Grid item key={card.id} xs={12} md={6} lg={3} width={345}>
                <DiaryCard title={card.title} subTitle="Noah" description={card.description}/>
            </Grid>
         )}
    </Grid>

    </div>
</div>
)
      

}

export default DiaryHome;
 


