import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
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
            var textTemp=props.description.substring(1, 100);
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

        <Card sx={{ maxWidth: 400,minWidth:275}} style={{backgroundColor:props.color}}>
             <CardHeader
                title={props.title}
                subheader={props.subTitle}
            />
            <CardContent>
                <Typography>
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{display:visibility}} onClick={handleShowMore} >{label}</Button>
            </CardActions>
        </Card>
    );
}

