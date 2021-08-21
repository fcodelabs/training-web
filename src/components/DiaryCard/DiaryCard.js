import Card from '@material-ui/core/Card';
import {Button, CardActions, CardContent, Typography} from "@material-ui/core";
import classes from './DiaryCard.module.css'
import {useState} from "react";

function DiaryCard(props) {
    const [showMore, setShowMore] = useState(false);

    return (
        <Card className={classes.main}>
            <CardContent className={classes.card}>
                <Typography variant='h4' className={classes.cardHeader} gutterBottom align='center'>{props.title}</Typography>
                <p className={classes.subTopic}>{props.author} </p>
                <Typography variant='body1'> {showMore ? props.description : props.description.substring(0, 100 || props.description.length()) + "..."} </Typography>
                <CardActions>
                    <Button size="small"  variant="contained" color="secondary" id='addBTN' onClick={() => setShowMore(!showMore)}>{!showMore ? "SHOW MORE" : "SHOW LESS"}</Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}

export default DiaryCard;