import React, { useState } from "react";
import {Card, Typography, Button } from "@mui/material";
import { styled} from '@mui/system';

//set styles to cards
const StyledCard = styled(Card)({
    width:270,
    margin:'5px',
    borderRadius:'12px',
    padding:"15px",
    minHeight:180
});

//set Styles to sub headings
const StyledSubTitle = styled(Typography)({
    marginBottom:'10px'
});

function DairyCard(props: { description: String; title: String; subTitle: String; }) {
    let description  = props.description; //get the description from the props
    let [isGreater, setIsGreater] = useState(description.length > 100) //variable to check the paragh length and create a state
    
    //initialize limited text
    let limitedText = "";

    //if character length >100, limit the description and stor to variable
    if(isGreater){
        limitedText = description.slice(0, 100) + "...";
    }

    //show limited text when click on show more button
    function clickShowHandler(){
        setIsGreater(false);
    }

    return (
    <StyledCard variant="outlined">
        <Typography variant="h5"> {props.title} </Typography>
        <StyledSubTitle variant="subtitle1"> {props.subTitle} </StyledSubTitle>
        <Typography variant="body1"> </Typography>
        {!isGreater && <Typography variant="body1">{description}</Typography>}
        {isGreater && <Typography variant="body1">{limitedText}</Typography>}
        {isGreater && <Button onClick={clickShowHandler}>Show More</Button>}
    </StyledCard>
    );
}
export default DairyCard;
