import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent , Typography , CardActions , Button } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        width: 275,
      },
      title: {
        fontSize: 24,
      },
      pos: {
        marginBottom: 12,
      },
})


const DiaryCard = ({tittle, subtitle, description , color}) => {
    const classes = useStyles();
    const[showMore , setShowMore] = useState(true);

    const showDescription = showMore ? description.slice(0,100)+'...' : description;

    function toggleShowMore() {
        setShowMore(!showMore)
    }

    return (
        <Card className={classes.root} style={{backgroundColor: color}} >
          <CardContent>
            <Typography className={classes.title} variant="h5" component="h2">
              {tittle}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {subtitle}
            </Typography>
            <Typography variant="body2" component="p">
              {showDescription}
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" onClick={toggleShowMore}>{showMore ? 'SHOW MORE' : 'SHOW LESS'}</Button>
          </CardActions>
        </Card>
      );

}
 
export default DiaryCard;