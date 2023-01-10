import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./DiaryHome.css";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Grid } from '@mui/material';
import DiaryCard from '../../components/DiaryCard/DiaryCard';
import { collection, addDoc,getDocs  } from "firebase/firestore"; 
import { db } from '../../utils/firebaseConfig';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getMessageSuccess } from './DiaryHomeSlice';

interface MyProps {
  [x: string]: any; 
  title : string
  name : string
  description : string 
}
  
  
export default function DairyHome() {

    const [touched, setTouched] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [clicked, setClicked] = React.useState(false);
    const distpatch = useDispatch()

    const useEffect = React.useEffect(() => {
      getMessages();
    }, []);
    
    const {state} = useLocation();
    const name = state.name;

    const handleTouch = (event: any) => {
        event.preventDefault();
        setTouched(true);
    }

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => { 
        event.preventDefault();
        setTouched(false);
        if (title == '' || description == ''){
            setClicked(false);
            console.log('Missing title or Missing description')
        }else{
            console.log(title, description);
            console.log("clicked");   
            try {
              const docRef = await addDoc(collection(db, "messages"), {
                name: state.name,
                title: title,
                description: description
                
              });
              console.log("Document written with ID: ", docRef.id);
              getMessages();
            } catch (e) {
              console.error("Error adding document: ", e);
            }
               
            setClicked(true);
        }
        setTitle('');
        setDescription('');
    }

   
    
    const getMessages = async () => { 
      var msgs = [] as any;
        const querySnapshot = await getDocs(collection(db, "messages"));
        querySnapshot.forEach((doc) => {
          let msg = [];
          msg.push(doc.data().title, doc.data().name, doc.data().description);
          console.log("msg", msg);
          msgs.push(msg);
          
        });
        distpatch(getMessageSuccess(msgs))
    }

    const messages = useSelector((state: MyProps) => state.message.messages);

        


    return (
        <div>
      
        <div style={{margin: 'auto',
            width: '90%',
            padding: '2vw', }}>
    
          <Typography component="h2" variant="h2" color='white' sx={{mt: 3, mb: 3, paddingLeft: "", fontSize: '2rem', fontWeight: 'bold', textAlign: 'left'}}>
                Home
          </Typography>
                
          <Box  sx={{ mt: 3, mb: 3, textAlign: 'left'}} >
          <Grid container spacing={4} >
            <Grid item xs={10}>
            <TextField
            // required
            fullWidth
            id="title"
            type="text"
            placeholder="Submit New"
            name="title"
            value={title}
            autoFocus={false}
            onFocus= {handleTouch}
            onChange={(e) => setTitle(e.target.value)}
        
            sx={{
                paddingBottom: "0",
                '& label': { paddingLeft: (theme) => theme.spacing(2) },
                '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
                '& fieldset': {
                  
                  borderRadius: '30px',
                  border: 'none',
                  backgroundColor: '#9971E14D',
                  width: '100%',
                  marginRight: '2vw',
                },
              }}
            
          />
            </Grid>
              
            <Grid item  xs={2}>
                {touched && <Button
                //type="submit"
                variant="contained"
                onClick={handleSubmit}
                sx={{ height:'100%', margin: 'auto', width: '100%', borderRadius: '30px',  color: 'black', fontWeight: 'bold', backgroundColor: '#5353c6' }}
            >
                Submit
            </Button>}
            </Grid>
            </Grid>
            <Grid>
    
            <Grid item xs={12}>
              {touched && <div>
              <TextareaAutosize
            aria-label="minimum height"
            minRows={10}
            placeholder="Enter Description"
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: "96%", borderRadius: '10px',
            border: 'none',
            backgroundColor: '#b3d4fc', padding: "2vw", marginTop: '2vw'}}  />
              </div>}
            </Grid>
          </Grid>
          
          </Box>
          <Grid container spacing={4}>
          {messages.map((m: string[]) => {return ( <Grid item xs={12} md={3}>
                    <DiaryCard title={m[0]} description={m[2]} name={m[1]}  /> </Grid>  
                  
                )})}
       
       </Grid>  
    
        </div> 
       
        </div>
            
        
    );
   
   
}