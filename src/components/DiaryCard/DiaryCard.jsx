import { Card, CardContent, Container, Typography,CardActions,Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

const DiaryCard = ({title,subtitle,description,color}) => {
    const [expand,setExpand] = useState(false);
    return (
        <Card style={{backgroundColor:color}} >
            <CardContent>
                <Typography gutterBottom variant="h3"  >
                        {title}
                </Typography>
                <Typography gutterBottom variant="h5"  >
                        {subtitle}
                </Typography>
                <Typography gutterBottom variant="h6"   >
                        {expand?description:description.substring(0,100)+"..." }
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>setExpand(!expand)} >Show More</Button>
            </CardActions>
        </Card>
    )
}

export default DiaryCard;
