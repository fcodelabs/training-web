import '../../utils/diaryCard.css';

//import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//import ShowMore from 'react-show-more-button/dist/module';
import React, {useState} from "react";

function DiaryCard(){

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

      // const SimpleCard = () => {
      //   const classes = useStyles();
      //   const bull = <span className={classes.bullet}>•</span>;

      // }
      const classes = useStyles();
        const bull = <span className={classes.bullet}>•</span>;

      const [showMore, setShowMore]=useState(false);
      const text="We have been with Fcode Labs since 2019,and they have done an outstanding job with all our web, app and GIS evelopment work. Highly skilled, insightful and exceptionally responsive at a very competitive price.";

    return(
      
        <Card className={classes.root}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
          Card Name
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
    //  <div className="App">
    //    <div className="card">
    //      <h1 id="h1Name">Card Name</h1>
    //      <h3 id="uname">name</h3>
    //       <ShowMore maxHeight={150}>
    //      <p>We have been with Fcode Labs since 2019,
    //         and they have done an outstanding job with all our web, 
    //         app and GIS development work. Highly skilled, insightful 
    //         and exceptionally responsive at a very competitive price.</p>
    //      </ShowMore> 
    //      <p>
    //        {showMore ? text:text.substring(0,100)}
    //        <button id="btn" onClick={()=> setShowMore(!showMore)}>
    //          {showMore ? "Show less":"Show more"}
    //        </button>
    //      </p> 

    // //   </div>
    // // </div>

    );
}

export default DiaryCard;