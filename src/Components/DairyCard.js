import React ,{useState}from 'react'
import Button from './Button'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button1 from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
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

function DairyCard({title,subtitle,description}) {


    const [readmore,setReadMore] =useState(true);
    const displaydisciption= readmore? description.slice(0,100):description;
    const onClick=()=>{
        setReadMore(!readmore);
        console.log("ddd");
    }
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.root}>
        <CardContent>
       
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {subtitle}
          </Typography>
          <Typography variant="body2" component="p">
            {displaydisciption}
            
          </Typography>
        </CardContent>
        <CardActions>
            <Button text={readmore?"read more":"read less"} onClick={onClick}/>
            
          
        </CardActions>
      </Card>
    )
}


DairyCard.defaultProps={
    title:'task name',
    subtitle:'sub task name',
    description:"I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
}
DairyCard.propTypes = {
    title:PropTypes.string,
    subtitle:PropTypes.string,
    description:PropTypes.string,
    
}










export default DairyCard