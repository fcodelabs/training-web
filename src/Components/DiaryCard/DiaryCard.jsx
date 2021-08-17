import { Card, CardContent, Typography,CardActions,Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

const DiaryCard = ({title,subtitle,description,color}) => {
    const [expand,setExpand] = useState(false);
    return (
        <Card style={{backgroundColor:color}} >
            <CardContent >
                <Typography gutterBottom variant="h4"  style={{wordWrap:"break-word"}}  >
                        {title}
                </Typography>
                <Typography gutterBottom variant="h6"  style={{wordWrap:"break-word"}}  >
                        {subtitle}
                </Typography>
                <Typography variant="h7" display="block" style={{wordWrap:"break-word"}}  >
                        {expand?description:description.substring(0,100||description.length())+"..." }
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>setExpand(!expand)} >Show More</Button>
            </CardActions>
        </Card>
    )
}

export default DiaryCard;
