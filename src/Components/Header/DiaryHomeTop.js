import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
      color:"white",
      textAlign:"left",
      paddingLeft:"10px",

    },
  });

function DiaryHomeTop(){

    const classes = useStyles();

    return(
        

        <div className={classes.root}>
        
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
            Home
            </Typography>
            <Typography variant="body1" component="h3" gutterBottom>
            You are here:  Home
            </Typography>
        </div>

    )

}
export default DiaryHomeTop;
