import React,{useState} from 'react'
import { TextField,Button,Grid,Container,AppBar,Toolbar} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import DiaryCard from '../../Components/DiaryCard/DiaryCard';
import useStyles from './styles';
import { useEffect } from 'react';
import {getPostStart,addPostStart} from '../../utils/actions/items'
import { useSelector } from 'react-redux';
const DiaryHome = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [details,setDetails] = useState({userName:props.location.state.userName,title:'',description:''})
    const items = useSelector(state => state.items.itemsArray);
    useEffect(()=>{
        dispatch(getPostStart());
    },[dispatch]);
    ///Comment
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(details.title===''){
            console.log('Title Missing')
        }
        else if(details.description===''){
            console.log('Description Missing')
        }
        else{
            dispatch(addPostStart(details));
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
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <DiaryCard  title={item.title} description={item.description} subtitle="" />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default DiaryHome;
