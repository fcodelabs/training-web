import { Box, Card, CardActions, CardContent, Typography, Button } from "@mui/material";
import { useState } from "react";

interface DiaryCardProps {
    title: string;
    username: string;
    description: string;
}

export const DiaryCard = ({ title, username, description }: DiaryCardProps) => {
    const [showMore, setShowMore] = useState(false);

    function handleShowMore() {
        setShowMore(!showMore);
    }

    return (
        <div>
            <Card sx={{
                backgroundColor: "#B9E9FF",
                width: 350,
                borderRadius: "15px",
                padding: "5px",
                minHeight: 200,
                fontFamily: "Open Sans"

            }}>
                <CardContent>
                    <Typography
                        variant='h4'
                        align='left'>
                        {title}
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        fontSize='14px'
                        align='left'
                        color='#696969'
                        gutterBottom>
                        {username}
                    </Typography>
                    <Typography
                        variant='body1'
                        fontSize='14px'
                        align='left'
                        color='rgba(0, 0, 0, 0.87)'
                        gutterBottom>
                        {showMore ? description : description.slice(0, 100)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                        <Button
                            variant='text'
                            size='small'
                            sx={{ color: 'black', borderRadius: '15px',  fontWeight: 'bold' }}
                            onClick={handleShowMore}>
                            {showMore ? 'Hide' : 'Show More'}
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </div>
    )

}