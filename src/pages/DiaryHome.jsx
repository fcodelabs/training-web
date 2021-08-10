import React,{useState} from 'react'
import { TextField,Typography,Button,Paper,Grid,Container,AppBar,Toolbar, FormControl } from '@material-ui/core';
import DiaryCard from '../components/DiaryCard/DiaryCard';
import useStyles from './styles';
const DiaryHome = () => {
    const classes = useStyles();
    const [details,setDetails] = useState({title:'',description:''})
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(details);
        setDetails({title:'',description:''});
    }
    return (
        <div>
            <AppBar position="absolute">
                <Toolbar/>
            </AppBar>
            <Container style={{marginTop:'100px'}}  >
                <form autoComplete="off" fullWidth className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                    <TextField name="title" fullWidth variant="outlined" label="Title" className= {classes.textField} value={details.title} onChange={(e) => setDetails({ ...details, title: e.target.value })} />
                    <TextField name="message" fullWidth variant="outlined" label="Description"  multiline rows={4} value={details.description} className= {classes.textField} onChange={(e) => setDetails({ ...details, description: e.target.value })}/>
                    <Button className={classes.button} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                </form>
            </Container>


            
            <Container maxWidth="lg" style={{marginTop:'100px'}} >
                    <Grid container spacing={4} >
                        <Grid item key={0} xs={12} sm={6} md={4}  >
                            <DiaryCard title="Titile-01" subtitle="Subtitle-01" description=" consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i" />
                        </Grid>
                        <Grid item key={1} xs={12} sm={6} md={4}>
                            <DiaryCard title="Titile-02" subtitle="Subtitle-02" description=" consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i"  />
                        </Grid>
                        <Grid item key={3} xs={12} sm={6} md={4}>
                            <DiaryCard title="Titile-03" subtitle="Subtitle-03" 
                            description=" consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i" />
                        </Grid>
                    </Grid>
            </Container>
        </div>
    )
}

export default DiaryHome;
