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

import { useSelector,useDispatch } from 'react-redux';

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

   
const titleText=props.title
const name=props.name
var temp1=props.description

//const[description1,setDiscription1]=useState("")
//const[description2,setDiscription2]=useState("")
//const[dot,setDot]=useState('')
//const[expandMore,setExpandMore]=useState('none')

const description1=useSelector((state)=>state.DiaryCard.description1)
const description2=useSelector((state)=>state.DiaryCard.description2)
const dot=useSelector((state)=>state.DiaryCard.dot)
const expandMore=useSelector((state)=>state.DiaryCard.expandMore)
const dispatch=useDispatch()
//dispatch({type:'descVisiility',value:'none'})
 useEffect(()=>{
         if(temp1.length>100){
          //setExpandMore('block')
          dispatch({type:'expandMore',value:'block'})
          dispatch({type:'description1',value:temp1.substring(0,80)})
          dispatch({type:'description2',value:temp1.substring(80,temp1.length)})
           // setDiscription1(temp1.substring(0,80))
           // setDiscription2(temp1.substring(80,temp1.length))
            if(expanded==false){
               // setDot('block')
                dispatch({type:'dot',value:'block'})
            }else{
                //setDot('none')
                dispatch({type:'dot',value:'none'})
            }
            
         }else{
           // setDiscription1(temp1)
            //setDiscription2("")
           dispatch({type:'description1',value:temp1})
           dispatch({type:'description2',value:''})
            //setDot('none')
            dispatch({type:'dot',value:'none'})
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
          style={{display:expandMore}}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
