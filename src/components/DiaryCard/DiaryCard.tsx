import {Button,Typography,CardContent,CardActions, Card} from '@mui/material';
import  React  from "react";
import { useState } from 'react';
import { handleDescriptionClick } from '../../utility/util';

//get the passed data by interface type
interface CardProps{
    title:string;
    description:string;
    userName:string;
 }

const DiaryCard = (props:CardProps) => {

    //use state for show more btn
    const [showMore, setShowMore] = useState(false);

    // for setthe show more,hide
    const handleToggleShowMore = () => {
        setShowMore(!showMore);
    };

    // find the characters of description less than 100 using util file
    const renderDescription = () => {
       return handleDescriptionClick(props.description,showMore)
    };

    // find the description how is it and return the hide or show more
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