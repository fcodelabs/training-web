import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface CardProps {
    title: string;
    subtitle: string;
    description: string;
}

const DiaryCard: React.FC<CardProps> = ({ title, subtitle, description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <Card sx={{ minWidth: '20vw', marginBottom: '1vh', backgroundColor: '#b9e9ff', borderRadius: 3 }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography>
                    {subtitle}
                </Typography>
                <Typography variant="body2">
                    {showFullDescription ? description : description.slice(0, 100)}
                </Typography>
                <Button onClick={toggleDescription} sx={{ marginTop: '1vh' }} size="small">
                    {showFullDescription ? 'Show Less' : 'Show More'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default DiaryCard;
