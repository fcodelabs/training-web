import { Box, Card, CardActions, CardContent, Typography, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface DiaryCardProps {
    title: string;
    username: string;
    description: string;
}

export const DiaryCard = ({ title, username, description }: DiaryCardProps) => {
    const [showMore, setShowMore] = useState(false);
    const cardContentRef = useRef<HTMLDivElement | null>(null);
    const [cardHeight, setCardHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (cardContentRef.current) {
            setCardHeight(cardContentRef.current.clientHeight);
        }
    }, [description]);

    function handleShowMore() {
        setShowMore(!showMore);
    }

    return (
        <div
        style={{
            //cursor: 'default',
            //tabSize: 4,
            WebkitTextSizeAdjust: '100%',
            wordBreak: 'break-word',
            color: '#424242',
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '100%',
            lineHeight: 1.5,
            backgroundRepeat: 'no-repeat',
            margin: '5px',
            //boxSizing: 'border-box',
            //flexGrow: 0,
            //maxWidth: '50%',
            //flexBasis: '50%',
        }}
        >
            <Card sx={{
                backgroundColor: "#B9E9FF",
                width: '335px',
                borderRadius: "15px",
                padding: "5px",
                minHeight: cardHeight

            }}>
                <CardContent ref={cardContentRef}>
                    <Typography
                        variant='h4'
                        align='left'>
                        {title}
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        fontSize='14px'
                        align='left'
                        color='#717478'
                        fontWeight= 'regular' 
                        gutterBottom>
                        {username}
                    </Typography>
                    <Typography
                        variant='body1'
                        fontSize='14px'
                        align='left'
                        color='rgba(0, 0, 0, 0.87)'
                        fontWeight= 'regular'
                        gutterBottom>
                        {showMore ? description : description.slice(0, 100)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                        <Button
                            variant='text'
                            size='small'
                            sx={{ 
                                color: 'black', 
                                borderRadius: '15px',  
                                fontWeight: 700 }}
                            onClick={handleShowMore}>
                            {showMore ? 'Hide' : 'Show More'}
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </div>
    )

}