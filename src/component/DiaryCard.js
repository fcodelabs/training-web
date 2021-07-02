import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types'
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";



export default function DiaryCard({title,subtitle,description,cardColor}) {
  const classes = useStyles();
  const [readmore,setReadMore] =useState(true);
  const displayDiscription= readmore? description.slice(0,100):description;
  const onClick=()=>{
      setReadMore(!readmore);
      console.log("show");
  }

  return (
    <Box p={1} bgcolor="background.paper">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
           {title}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {subtitle}
          </Typography>

          <Typography variant="body2" component="p">
            {displayDiscription}
          </Typography>
        </CardContent>
        <CardActions>
         
          <Button className={classes.btn} size="small" text={readmore?"read more":"read less"} onClick={onClick}>
            Show More
          </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

DiaryCard.defaultProps={
  title:'Task-Name',
  subtitle:'SubTask-Name',
  description:'Clarissa is a tragic heroine, pressured by her unscrupulous nouveau-riche family to marry a wealthy. Clarissa is a tragic heroine, pressured by her unscrupulous nouveau-riche family to marry a wealthy.',
  cardColor:'white',
}
DiaryCard.propTypes = {
  title:PropTypes.string,
  subtitle:PropTypes.string,
  description:PropTypes.string,
  cardColor:PropTypes.string,
  
}

const useStyles = makeStyles({
  root: {
    maxWidth: 175,
    borderRadius: 3,
    borderColor: "#ffffff",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});
