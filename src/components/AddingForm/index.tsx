import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./styles.css";
import FilledInput from '@mui/material/FilledInput';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Grid } from '@mui/material';
  
export default function DairyHome() {
    
    const [touched, setTouched] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const handleTouch = (event: any) => {
        event.preventDefault();
        setTouched(true);
    }

    const handleSubmit = (event: any) => { 
        event.preventDefault();
        setTouched(false);
        console.log(title, description)
        setTitle('');
        setDescription('');
    }


    return (
        <div>
      
    <div style={{margin: 'auto',
        width: '90%',
        padding: '2vw', }}>

      <Typography component="h3" variant="h3" color='white' sx={{mt: 3, mb: 3, paddingLeft: "", fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'left'}}>
            Home
      </Typography>
            
      <Box sx={{ mt: 3, mb: 3, textAlign: 'left'}} >
      {/* <div className="TextField-without-border-radius"> */}

      <Grid container spacing={2} >
        <Grid md={10}>
        <TextField
        required
        fullWidth
        id="title"
        type="text"
        placeholder="Submit New"
        name="title"
        //variant='filled'
        // sx={{ borderRadius: '25px', border: 'none', width: '50%', margin: 'auto', padding: '0 0 10px 0', height: '50%'}}
        value={title}
        autoFocus={false}
        onFocus= {handleTouch}
        onChange={(e) => setTitle(e.target.value)}
    
        sx={{
            paddingBottom: "0",
            '& label': { paddingLeft: (theme) => theme.spacing(2) },
            '& input': { paddingLeft: (theme) => theme.spacing(3.5) },
            '& fieldset': {
              paddingLeft: (theme) => theme.spacing(2.5),
              borderRadius: '30px',
              border: 'none',
              backgroundColor: '#9971E14D',
              width: '50%',
            },
          }}
        
      />
        </Grid>
          
        <Grid md={2}>
            {touched && <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
        >
            Submit
        </Button>}
        </Grid>
      </Grid>
      
      {/* </div> */}

      
        {touched && <div>
        <TextareaAutosize
      aria-label="minimum height"
      minRows={10}
      placeholder="Description"
      name='description'
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      style={{ width: "100%", borderRadius: '30px',
      border: 'none',
      backgroundColor: '#b3d4fc' }}  />
        </div>}
     
      
      </Box>

    </div>    
    </div>
        
    );
   
   
}