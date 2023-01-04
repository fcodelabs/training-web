import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MyProps { 
    title : string
    name : string
    description : string 
    }
    
  
export default function DiaryCard(props : MyProps ) {

    const [showMore, setShowMore] = React.useState(false);

    const handleClick = (event: any) => {
        event.preventDefault(); 
        if (showMore) {
            setShowMore(false);
        } else{
        setShowMore(true);
        }

    }
    
    return (
        <div>   
            <Card  sx={{ minWidth: 275, width: "30%", textAlign: "left", margin: "auto", borderRadius: "10px", boxShadow: "none", backgroundColor: "#cce6ff" }}>
            <CardContent>
                
                <Typography variant="h5" component="div">
                {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.name}
                </Typography>
                {!showMore && <Typography variant="body2">
                {props.description.length <= 100 ? props.description: (props.description.substr(0, 100) + "...") }
                {props.description.length > 100 ? <CardActions sx={{paddingLeft: '0px'}} ><Button sx={{padding: '0px'}} size="small" onClick={handleClick}>Show More</Button>  </CardActions>: null}
                </Typography>}

                {showMore && <Typography variant="body2">
                {props.description }
                <CardActions  sx={{paddingLeft: '0px'}} > <Button sx={{padding: '0px'}} size="small" onClick={handleClick}>Show Less</Button> </CardActions>
                </Typography>}

            </CardContent>
            {/* <CardActions>
                <Button size="small">Show More</Button>
            </CardActions> */}
            </Card>
        </div>
    )
    
   
   
}