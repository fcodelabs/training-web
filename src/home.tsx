import DiaryCard from "./components/diary card/DiaryCard";
import Navbar from "./components/Navbar/Navbar";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useState } from 'react';

const Home = () => {
    const [title, setSubmitNew] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        const Diary = {title, description};
        console.log(Diary);
    }

    return ( 
        <>
        <Navbar/>


        <form onSubmit={handleSubmit}>
        <Box sx={{ flexGrow: 2, display:'flex' }}>
            
            <Grid container spacing={2}>
                <Grid item xs={10} >

                <TextField 
                style={{width:'100%', margin:'1%'}} id="outlined-basic"
                label="Submit New" variant="filled" value={title}
                onChange={(e) => setSubmitNew(e.target.value)}
                />

                </Grid>
                <Grid item xs={2}>

                    <Button style={{
                        width:"70%",
                        height:"55%",
                        margin:'1vw 0 0vw 2vw',
                        borderRadius: 20,
                        }} variant="contained">Submit
                    </Button>

                </Grid>
                <Grid item xs={12}>
                    <TextareaAutosize
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Enter Description"
                    style={{ width:'95%', margin:'1%',border:'none', borderRadius: 20,
                                backgroundColor: '#f2f2f2',opacity:'0.7', padding:'1vw',fontSize:'1.2vw' }}
                    />

                </Grid>
            </Grid>
        
            
        </Box>
        </form>


        <DiaryCard title={title} description={description}/>
        </>
     );
}
 
export default Home;