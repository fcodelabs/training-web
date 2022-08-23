import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export default function cart(props) {
  return (
    <Card sx={{ m:2,width:'auto'}} >
      <CardActionArea>
        <CardContent>
          <Typography  gutterBottom variant="h5" component="div" md={5} >
            {props.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
          Subtitle
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
          <Button>SHOW MORE</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    
  )
}
