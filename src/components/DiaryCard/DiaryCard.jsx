import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from "react";


export default function DiaryCard(props) {

    const [text, setText] = useState("");
    const [label, setLabel] = useState("SHOW MORE");
    const [visibility,setVisibility]=useState("none");



    useEffect(() => {

        if (props.description.length < 100) {
            setText(props.description);
            setVisibility("none");
        } else {
            let textTemp=props.description.substring(1, 100);
            setText(textTemp + "...");
            setVisibility("block");
        }
    },[]);

    function handleShowMore() {

        if (label == "SHOW MORE") {
           
            setText(props.description);
          
        } else {
            setText(props.description.substring(1, 100) + "...");
           
        }

        var tempLabel = (label == "SHOW MORE") ? "SHOW LESS" : "SHOW MORE";
        setLabel(tempLabel);

    }


    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: props.color }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.subTitle}
                </Typography>
                <Typography variant="body2">
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ color: 'black' ,display:visibility}} onClick={handleShowMore} >{label}</Button>
            </CardActions>
        </Card>
    );
}
