import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

/*Styling*/
const useStyles = makeStyles({
    container: {
        position: 'relative',
        width: '100%',
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'brown'
    },
    content: {
        display: 'grid',
        gridTemplateColumns: `repeat(3, 1fr)`,
        width: '95%',
        backgroundColor: 'green'
    },
    card: {
        width: 300,
        backgroundColor: 'skyblue',
        borderRadius: 10,
    },
    subtitle: {
        marginBottom: 12,
    },
});

function DiaryCard({title, subtitle, description}) {
    const classes = useStyles();

    //states
    const [isShowMore, setShowMore] = useState(false);

    //show more handler
    function buttonHandler() {
        setShowMore(!isShowMore);
    }

    return (
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography variant='h5'>
                    {title}
                </Typography>
                <Typography className={classes.subtitle} color="textSecondary">
                    {subtitle}
                </Typography>
                <Typography variant="body2">
                    {description.length > 100 && !isShowMore ? description.substring(0, 99) + ' ...' : description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={buttonHandler}
                >
                    {isShowMore ? 'SHOW LESS' : 'SHOW MORE'}
                </Button>
            </CardActions>
        </Card>
    );
}

export default DiaryCard;
