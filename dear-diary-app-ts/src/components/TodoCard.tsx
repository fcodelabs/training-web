import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface Todo {
  todo: string;
  userName: string;
  description: string;
}

interface TodoCardProps {
  todo: Todo;
}

const TodoCard: React.FC<TodoCardProps> = (props) => {
  const [showMore, setShowMore] = useState(false);
  const text = props.todo.description;

  return (
    <div style={{ padding: 5 }}>
      <Grid item xs>
        <Card style={{ backgroundColor: '#cbe6ef' }} sx={{ maxWidth: 345, minWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.todo.todo}
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary" component="div">
              {props.todo.userName}
            </Typography>
            <Typography variant="body2">
              {showMore ? text : `${text.substring(0, 100)}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'SHOW LESS' : 'SHOW MORE'}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
};

export default TodoCard;
