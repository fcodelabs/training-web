import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';


function DiaryCard(props) {

    const [more, setMore] = useState(false);

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    {props.title}
                </Typography>
                <Typography variant="subtitle">
                    @{props.subtitle}
                    <br />
                </Typography>
                <br />
                <Typography paragraph style={{ wordWrap: "break-word" }}>
                    {more ? props.description : props.description.substring(0, 100 || props.description.length()) + "..."}
                </Typography>
                <CardActions>
                    <Button size="medium" onClick={() => setMore(!more)} >{!more ? "Read more" : "Read less"}</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default DiaryCard
