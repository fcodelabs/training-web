import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MyProps {
    title: string;
    description: string;
}

const DiaryCard = (props : MyProps) => {
    const title = props.title;
    const description = props.description;
    return ( 
        <>
    <Card sx={{ minWidth: 100 , maxWidth:300,
         margin:'1%', bgcolor:'#ADD8E6', borderRadius:'5%', boxShadow:'0'}}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} variant="subtitle1" color="black" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Name
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined">Show more</Button>
      </CardActions>
    </Card>
        </>
     );
}
 
export default DiaryCard;