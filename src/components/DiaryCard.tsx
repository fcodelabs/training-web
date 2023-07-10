import {Button,Typography,CardContent,CardActions, Card} from '@mui/material';
import  React  from "react";
import { useState } from 'react';

const DiaryCard = (props:any) => {

    const [showMore, setShowMore] = useState(false);

    return ( 
    <Card sx={{ width: 300, marginTop:5 }}>
        <CardContent>
            <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                {props.title}
            </Typography>
            <Typography sx={{ mb: 1.5}} color="text.secondary">
                {props.userName}
            </Typography>
            <Typography variant="body2">
                {props.description}
            </Typography>
        </CardContent>
        <CardActions>
         <Button>Show More</Button>
        </CardActions>
    </Card>
     );
}
 
export default DiaryCard;