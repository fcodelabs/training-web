import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    root: {
        width: "250px",
        margin:"10px"
    },
    title: {
        fontSize: 14,
    },
    description: {
        paddingTop: "10px"
    }
})

function DiaryCard({ title, subtitle, description, color }) {

    //Styles
    const classes = useStyles();

    //State for see More
    const [more, setMore] = useState(true);

    //Change String Size
    const resultString = more ? description.slice(0, 100) + '...' : description;

    function showMore() {
        setMore(!more)
    }


    return (
        <div>
            <Card className={classes.root} style={{ backgroundColor: `${color}` }}>
                <CardContent>
                    <Typography variant="h5">{title}</Typography>
                    <Typography color="textSecondary">{subtitle}</Typography>
                    <Typography variant="body2" className={classes.description}>{resultString}</Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" onClick={showMore}>Show {more ? "MORE" : "LESS"}</Button>
                </CardActions>

            </Card>
        </div>
    )
}

export default DiaryCard
