import React, { useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface DiaryCardProps {
  title: string;
  description: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const DiaryCard: React.FC<DiaryCardProps> = ({ title, description }) => {
  const [showMore, setShowMore] = useState(false);
  const truncatedDescription = truncateText(description, 100);
  const shouldShowButton = description.length > 100;

  return (
    <div>
      <Card sx={{ width: '271px', height: 'fit-content' }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 18, fontWeight: 500, color: "#4B465C", marginBottom: '6px' }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              fontWeight: 400,
              color: "#4B465C",
              marginBottom: '16px',
              height: showMore ? 'auto' : 'fit-content',
              width: 'auto',
              overflow: 'hidden',
              overflowWrap: 'break-word',
            }}
          >
            {showMore ? description : truncatedDescription}
          </Typography>
          {shouldShowButton && (
          <Button
            sx={{ fontSize: 15, fontWeight: 600, color: "#0092DD" }}
            size="small"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Hide' : 'Show More'}
          </Button>
           )}
        </CardContent>
      </Card>
    </div>
  );
}

export default DiaryCard;
