import './sign.scss';
import DiaryHomeTop from '../../Components/Header/DiaryHomeTop';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Card from "@material-ui/core/Card";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';


const SignIn = (props) => {
    const [state, setState] = useState({
      subTitle: '',
      
    });
    const useStyles = makeStyles({
        root: {
          width: '100%',
          maxWidth: 500,
          color:"white",
          textAlign:'center',
          
    
        },
      });

    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.history.push({
          pathname: '/details',
          state
        });
      };

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
      const classes = useStyles();

      var Names=['Noah','Liam','Ivan','Anne','Benjamin'];

      function getName(){
        var randomName=Names[Math.floor(Math.random()*Names.length)];
        return randomName;
      }

    return(
      <div>
        <div className={classes.root}>
          <h4 textAlign="center">Dear Diary</h4>
        </div>
        <Card className='conatiner'>
          <div className='title'> <Box sx={{ color: 'info.main' }}><h1>Sign In</h1></Box></div>
            <form className="signin-form" onSubmit={handleOnSubmit}>
              <div>
                <TextField sx={{ m: 1,width:'40ch' }}
                  required
                  id="outlined-required"
                  label="Your Nickname"
                  //Value={subTitle}
                  onChange={handleInputChange}/>
                <Button 
                //onClick={Value={getName()}}
                variant="contained" type="submit" sx={ { borderRadius: 28,m:1} }>
                  Random
                </Button>
              </div>
              <div>
                  <br/>
                  <Button variant="primary" type="submit" sx={ { borderRadius: 28,m:1} } >
                  CONTINUE
                  </Button>
                  <br/>
              </div>
              
           </form>
            <br/>
        </Card>
      </div>
);
    
};

  

export default SignIn;



// <div className="firstRow">
//       <br/>
//       <TextField 
//       value={title}
//       required
//       onChange={(e)=> setTitle(e.target.value)}
//        className="inputRounded"  autoFocus id="input-card" placeholder="Submit New" type="text" variant="outlined" size="small" sx={{m:1,width:"94%" }}/>

//        <Button style={{backgroundColor: 'rgb(28, 103, 243)', color: 'black'}} type ="submit" variant="contained" sx={ { borderRadius: 28,m:1} }>Submit</Button>
     
//       </div>


    //   <input
        //     type="text"
        //     placeholder="Your Nickname"
        //     name="subTitle"
        //     onChange={handleInputChange}>
        //  </input>
        

       
