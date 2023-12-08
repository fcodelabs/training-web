import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "@fontsource/public-sans/";

interface DiaryCardProps {
  title: string;
  description: string;
};

const DiaryCard : React.FC<DiaryCardProps> = ({ title , description}) => {
  const [showMore, setShowMore] = useState(false);

  const truncatedDescription = showMore ? description : `${description.slice(0, 100)}...`;

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Card sx={{ width: '271px', height: 'auto', padding: '20px', borderRadius: '6px', alignItems: 'flex-start',  }}>
      <CardContent>
        <Box style={{ display:'flex', height: '24px', marginBottom: '6px', alignItems: 'flex-start' }}>
          <Typography fontSize="18px" variant="h5" component="div">
            {title}
          </Typography>
        </Box>
        <Box style={{ display:'flex', height: 'auto', marginBottom: '16px', alignItems: 'flex-start' }}>
          <Typography fontSize="15px" variant="body2">
            {truncatedDescription}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleToggleShowMore}>
          {showMore ? 'Hide' : 'See More'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default DiaryCard;
