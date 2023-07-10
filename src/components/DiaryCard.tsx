import {Button,Typography,CardContent,CardActions, Card} from '@mui/material';
import  React  from "react";

const DiaryCard = (props:any) => {
    return ( 
    <Card sx={{ width: 300, marginTop:5 }}>
        <CardContent>
            <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
                {props.title}
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize:16, align:"left" }} color="text.secondary">
                {props.userName}
            </Typography>
            <Typography variant="body2">
                {props.description}
            </Typography>
        </CardContent>
        <CardActions>
        {props.description.length > 100 && (
          <Button>Show More</Button>
        )}
        </CardActions>
    </Card>
     );
}
 
export default DiaryCard;