import * as React from 'react';
import {useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './DiaryCard.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DiaryCard(props) {

   
const titleText="helo hhhfh dfjgdg"
const name="kamal"
var temp1=" Heat 1/2 cup of the broth in a pot until simmering, add saffron  together with your guests. add saffron  together with your guests.  "
const[description1,setDiscription1]=useState("")
const[description2,setDiscription2]=useState("")
const[dot,setDot]=useState('')
 useEffect(()=>{
         if(temp1.length>10){
            setDiscription1(temp1.substring(0,temp1.length-100))
            setDiscription2(temp1.substring(temp1.length-100,temp1.length))
            if(expanded==false){
                setDot('block')
            }else{
                setDot('none')
            }
            
         }else{
            setDiscription1(temp1)
            setDiscription2("")
         }
 })
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
    
  };

  return (
    <Card sx={{ maxWidth: 345 }} className='DiaryCard'>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={titleText}
        subheader={name}
      />

      <CardContent>
        <Typography className='mainText' variant="body2" color="text.secondary">
         {description1}<span className='dots' style={{display:dot}}>...</span>
         <Collapse className='restOfTheText' in={expanded} timeout="auto" unmountOnExit  >
         {description2}</Collapse>
      
        </Typography>
      </CardContent>

      

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
