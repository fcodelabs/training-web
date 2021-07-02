import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    root: {
        width: "250px",
    },
    title: {
        fontSize: 14,
    },
    description:{
        paddingTop:"10px"
    }
})

function DiaryCard({title, subtitle, description, color }) {

    //Styles
    const classes = useStyles();

    //State for see More
    const [more, setMore] = useState(true);

    //Change String Size
    const resultString = more ? description.slice(0, 100) + '...' : description;

    function ShowMore() {
        setMore(false);
    }

    function ShowLess() {
        setMore(true)
    }

    return (
        <div>
            <Card className={classes.root} style={{backgroundColor:`${color}`}}>
                <CardContent>
                    <Typography variant="h5">{title}</Typography>
                    <Typography color="textSecondary">{subtitle}</Typography>
                    <Typography variant="body2" className={classes.description}>{resultString}</Typography>
                </CardContent>


                {
                    more ?

                        <CardActions>
                            <Button size="small" onClick={ShowMore}>Show More</Button>
                        </CardActions>
                        :

                        <CardActions>
                            <Button size="small" onClick={ShowLess}>Show Less</Button>
                        </CardActions>
                }

            </Card>
        </div>
    )
}

export default DiaryCard
