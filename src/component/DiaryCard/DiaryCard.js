//import '../../utils/diaryCard.css';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import React, {useState} from "react";

function DiaryCard(props){

    const useStyles = makeStyles({
        root: {
          width: 300,
          borderRadius:10,
          
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });

      
      const classes = useStyles();
        const bull = <span className={classes.bullet}>•</span>;

      const [showMore, setShowMore]=useState(false);
     // const text="We have been with Fcode Labs since 2019,and they have done an outstanding job with all our web, app and GIS evelopment work. Highly skilled, insightful and exceptionally responsive at a very competitive price.";
      const text=props.description
      //const title={props.title}

       const [open, setOpen] =useState(false);
       const OpenCard=()=>{
         setOpen(true);
       };
        
      const closeCard =()=>{
       setOpen(false);
      };
    return(
      
        <Card className={classes.root}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
          {/* {title} */}
          Title
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          name
        </Typography>
        <Typography variant="body2" component="p">
          
          <br />
          {showMore ? text:text.substring(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" id="btn" onClick={()=> setShowMore(!showMore)}>
        {showMore ? "Show less":"Show more"}</Button>
      </CardActions>
    </Card>




   

    );
}

export default DiaryCard;