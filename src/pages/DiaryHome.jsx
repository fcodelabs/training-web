import React,{useState} from 'react'
import { TextField,Typography,Button,Paper,Grid,Container,AppBar,Toolbar, FormControl } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import DiaryCard from '../components/DiaryCard/DiaryCard';
import useStyles from './styles';
import { useEffect } from 'react';
import {getPosts,addPost} from '../actions/items'
import { useSelector } from 'react-redux';
const DiaryHome = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [details,setDetails] = useState({title:'',description:''})
    const items = useSelector(state => state.items);
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(details.title===''){
            console.log('Title Missing')
        }
        else if(details.description===''){
            console.log('Description Missing')
        }
        else{
            dispatch(addPost(details))
        }
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
