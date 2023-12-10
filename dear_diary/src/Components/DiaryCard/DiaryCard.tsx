import { Card, CardContent, Typography, Button } from '@mui/material';
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


interface CustomCardProps {
    title: string;
    description: string;
  }

function DiaryCard({title, description}: CustomCardProps){
    const [showMore, setShowMore] = React.useState(false);


    const handleShowMore = () => {
        setShowMore(!showMore)}

    return (
        <Card
        sx={{
            display: "flex",
            flexDirection: "column",
            width: "271px",
            alignItems: "flex-start",
            borderRadius: "6px",
            boxShadow: "0px 4px 18px 0px rgba(75, 70, 92, 0.10)",

        }}
        >
            <CardContent
            style={{
                padding:"20px"
            }}
            >
                <Typography
                component={'div'}
                sx={{
                    display: "flex",
                    paddingBottom: "6px",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    flex :"1 0 0",
                    color: "var(--light-typography-color-heading-text, #4B465C)",
                    fontFamily: "Public Sans, sans-serif",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "24px",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                }}
                >
                    {title}
                </Typography>
                <Typography
                component={'div'}
                sx={{
                    display: "flex",
                    paddingBottom: "16px",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    flex :"1 0 0",
                    color: "var(--light-typography-color-heading-text, #4B465C)",
                    fontFamily: "Public Sans, sans-serif",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "22px",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                }}
                >
                    {showMore || description.length <= 100 ? description : `${description.slice(0, 100)}...`}
                </Typography>

                {description.length > 100 && (
                <Button 
                sx={{
                    textTransform: "none",
                    display: "flex",
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    padding: "0px",
                    color: "#0092DD",
                    fontFamily: "Public Sans, sans-serif",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.43px",
                    fontFeatureSettings: "'clig' off, 'liga' off",
                    minWidth: "0px",

                }}
                onClick={handleShowMore}>
                    {showMore ? 'Hide' : 'Show More'}
                </Button>
        )}
            </CardContent>

        </Card>
    );
    }
export default DiaryCard;