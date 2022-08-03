import '../../utils/diaryHome.css';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        //width: '25ch',
        //borderRadius:'50%',
      },
      '& .MuiTextField-root': {
        //margin: theme.spacing(1),
        width: '85vw',
      },
    },
  }));


function DiaryHome()
{
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleSubmit=(e)=>{
        e.preventDefault();
        //e.target.reset();
        const submitNew=e.target.title.value;
        const description=e.target.description.value;

        console.log("Title :"+submitNew);
        console.log("Description :"+description);

        e.target.title.value="";
        e.target.description.value="";

    }

   // const [showResults, setShowResults] = React.useState(false)
   // const onClick = () => setShowResults(true)

    return(
        <div className="DiaryHome">
            <div className="header">
                <h1 id="h1home">Home</h1>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                   <TextField id="filled-basic" name="title" label="Submit New" variant="filled"/>
                   
                   <div>
                   <TextField id="filled-multiline-static" name="description"
                     label="Enter Description"
                     multiline
                     rows={4}
                     variant="filled"/>
                     <Button variant="contained" color="primary" type="submit" id="btn"> Submit</Button>
      
                   </div>
                   
                   

        
                </form>

            </div>

        </div>

    );
}
export default DiaryHome;