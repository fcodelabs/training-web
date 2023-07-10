import {Button,Typography,CardContent,CardActions, Card} from '@mui/material';
import  React  from "react";
import { useState } from 'react';

const DiaryCard = (props:any) => {

    const [showMore, setShowMore] = useState(false);

    const handleToggleShowMore = () => {
        setShowMore(!showMore);
    };

    const renderDescription = () => {
        if (props.description.length <= 100 || showMore) {
        return props.description;
        }
        return props.description.slice(0, 100) + '...';
    };

    const renderButtonText = () => {
        return showMore ? 'Hide' : 'Show more';
    };

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
                {renderDescription()}
            </Typography>
        </CardContent>
        <CardActions>
            {props.description.length > 100 && (
            <Button onClick={handleToggleShowMore}>{renderButtonText()}</Button>
            )}
        </CardActions>
    </Card>
     );
}
 
export default DiaryCard;