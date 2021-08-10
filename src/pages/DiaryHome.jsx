import React,{useState} from 'react'
import { TextField,Typography,Button,Paper,Grid,Container,AppBar,Toolbar, FormControl } from '@material-ui/core';
import DiaryCard from '../components/DiaryCard/DiaryCard';
import useStyles from './styles';
const DiaryHome = () => {
    const classes = useStyles();
    const [details,setDetails] = useState({title:'',description:''})
    const [items,setItems] = useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setItems((prevValue)=>{
            console.log(details)
            if(details.title===''){
                console.log('Title Missing');
                return [...prevValue]
            }
            else if(details.description===''){
                console.log('Description Missing');
                return [...prevValue]
            }
            else{
                return [...prevValue,details]
            }
        })
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
                    {items.map((item,index) => (
                        <Grid item key={index} item xs={12} sm={6} md={4}>
                            <DiaryCard  title={item.title} description={item.description} subtitle="Subtitle-01" />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default DiaryHome;
