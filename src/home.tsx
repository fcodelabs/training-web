import DiaryCard from "./components/diary card/DiaryCard";
import Navbar from "./components/Navbar/Navbar";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useState } from 'react';
import { Collapse } from '@mui/material';

const Home = () => {
    const [title, setSubmitNew] = useState('');
    const [description, setDescription] = useState('');
    const [collapseValue, setCollapse] = useState(false)

    const handleSubmit = (e : any) => {
        e.preventDefault();
        const Diary = {title, description};
        setSubmitNew('');
        setDescription('');
        console.log("Title" + {title});
        console.log("Description" + description);
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
                onFocus={ e => setCollapse(true)} 
                onBlur={e => setCollapse(false)}
                />
                </Grid>
                <Grid item xs={2}>

                <Button
                type="submit" 
                style={{
                    width:"70%",
                    height:"55%",
                    margin:'1vw 0 0vw 2vw',
                    borderRadius: 20,
                    }} variant="contained">Submit
                </Button>

                </Grid>
                

                <Grid item xs={12}>
                <Collapse in={collapseValue || (!!title || !!description)}>
                    <TextareaAutosize
                    onFocus={ e => setCollapse(true)} 
                    onBlur={e => setCollapse(false)}
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Enter Description"
                    style={{ width:'95%', margin:'1%',border:'none', borderRadius: 20,
                                backgroundColor: '#f2f2f2',opacity:'0.7', padding:'1vw',fontSize:'1.2vw' }}
                    />
                </Collapse>
                </Grid>
                
            </Grid>
        
            
        </Box>
        </form>


        <DiaryCard title={title} description={description}/>
        </>
     );
}
 
export default Home;