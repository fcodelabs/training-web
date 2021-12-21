import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import { CardActions } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import './card.scss';
import {useState} from "react";


function DiaryCard(props){

    const useStyles = makeStyles({
        root: {
          maxWidth: 345
        }
      });
    const classes = useStyles();


    const [showMore, setShowMore] = useState(false);
    


    return(
        <div className="container">
        <div className="cards">
        
                    
                        <Card className={classes.root} >
                            <div className="card">
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" align="left">
                                        {props.title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" component="h2" align="left">
                                        {props.subTitle}
                                    </Typography>
                                    <br/>
                                    <Typography variant="body2"  component="p" align="left" >
                                    {showMore ? props.description : `${props.description.substring(0, 100)} ...`}

                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button varient="text" size="small" color="inherit" onClick={() => setShowMore(!showMore)}>
                                        {showMore ? "Show less" : "Show more"}
                                    </Button>
                    
                                </CardActions>
                            </div>
                        </Card>
                    
            </div>
        </div>
       
    )

}

export default DiaryCard;

