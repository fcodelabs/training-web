import React ,{useState}from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from './Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '500px',
      },
    },
  }));

const DairyHome = () => {
    const [title,setTitle] =useState("");
    const [subTitle,setSubTitle] =useState("");
    const [description,setDescription] =useState("");
    const onClick=(e)=>{
        console.log("title="+title+ " description="+description);
        e.preventDefault();
        
        
        setDescription("");
        setSubTitle("");
        setTitle("");
        
        
    }
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Title" value={title}  onChange={(e) =>setTitle(e.target.value)} />
            <br/>
            <TextField id="standard-basic" label="SubTitle" value={subTitle} onChange={(e) =>setSubTitle(e.target.value)}/>
            <br/>
            <label/>
            <TextareaAutosize aria-label="minimum height" rowsMin={8} placeholder="Description" value={description} onChange={(e) =>setDescription(e.target.value)}/>
            <br/>
            <Button color="green"text="submit" onClick={onClick}/>
            </form>
            
            
        </div>
    )
}

export default DairyHome