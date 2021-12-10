import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardActions } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import './sass.scss';
import {useState} from "react";


const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});


function DiaryCard(){
    const classes = useStyles();
    const [showMore, setShowMore] = useState(false);
    


    let cards=[
        {
            title:"Reasons Why Learning English is so Important",
            subTitle:"Noah",
            description:"Out of the 6 500 spoken languages in the world today, why choose to learn English? As the third most widely spoken language in the world, English is widely spoken and taught in over 118 countries and is commonly used around the world as a trade language or diplomatic language. It is the language of science, aviation, computers, diplomacy and tourism. Last but not least, it is the language of international communication, the media and the internet.",
        },
       
    ]

    return(
        <div className="container">
        <div className="cards">

        {
            cards.map((card,index)=>{
                return(
                   
                   
                    <Card className={classes.root} >
                     <div className="card">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" align="left">
                                {card.title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="h2" align="left">
                                {card.subTitle}
                        </Typography>
                        <br/>
                         <Typography variant="body2"  component="p" align="left" >
                         {showMore ? card.description : `${card.description.substring(0, 100)} ...`}
                         </Typography>
                    </CardContent>
                    <CardActions>
                    <Button varient="text" size="small" color="inherit" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                    </Button>
                    
                   
                     </CardActions>
                     </div>
                    </Card>
                    
                    
                )
            })

        }
           
        </div>
        </div>
       
    )

}

export default DiaryCard;

