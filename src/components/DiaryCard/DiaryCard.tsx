import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface DiaryCardProps {
  title: string;
  description: string;
}

const DiaryCard: React.FC<DiaryCardProps> = ({ title, description }) => {
  return (
    <div>
      <Card sx={{ width: '271px', height: '170px' }}>
        <CardContent >
          <Typography
            sx={{ fontSize: 18, fontWeight: 500, color: "#4B465C", marginBottom: '6px' }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: 15, fontWeight: 400, color: "#4B465C", marginBottom: '16px' }}
          >
            {description}
          </Typography>
          <Button  sx={{ fontSize: 15, fontWeight: 600, color: "#0092DD" }} size="small">Show More</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default DiaryCard;
