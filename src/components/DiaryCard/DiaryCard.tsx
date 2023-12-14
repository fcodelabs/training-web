import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  { useState } from 'react';

const styles = {
    card: {
        width:{ xs: '30%', sm: '271px'},
        padding: '20px',
        borderRadius: '6px',
        mb: '35px',
    },
    title: {
        fontFamily: 'Public Sans',
        fontSize: '18px',
        fontWeight: '500',
        mb: '10px',
    },
    description: {
        fontFamily: 'Public Sans',
        fontSize: '15px',
        fontWeight: '400',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
    },
    button:{
        fontFamily: 'Public Sans',
        fontSize: '15px',
        fontWeight: '600',
        color: '#0092DD',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }
}


interface DiaryCardProps {
    title: string;
    description: string;
}


function DiaryCard(DiaryCardProps: DiaryCardProps) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
      };

      const displayDescription = isExpanded ? DiaryCardProps.description : `${DiaryCardProps.description.slice(0, 100)}...`;

  return (
    <Card sx={styles.card}>
    <CardContent>
      <Typography sx={styles.title}>
        {DiaryCardProps.title}
      </Typography>
      
      <Typography sx={styles.description} >
        {displayDescription}
      </Typography>
    </CardContent>

    <CardActions>
    <Button size="small" onClick={toggleExpanded} sx={styles.button}>
          {isExpanded ? 'Hide' : 'Show More'}
    </Button> 
    </CardActions>
  </Card>
  )
}

export default DiaryCard
