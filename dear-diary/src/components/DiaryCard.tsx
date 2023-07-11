import { Box, Card, CardActions, CardContent, Typography, Button } from "@mui/material";
import { useState } from "react";

export const DiaryCard = () => {
    const [showMore, setShowMore] = useState(false);
    const description = "Description ..."

    function handleShowMore() {
        setShowMore(!showMore);
    }


    return (
        <div>
            <Card sx={{
                backgroundColor: "#b3e3f5",
                width: 350,
                borderRadius: "15px",
                padding: "5px",
                minHeight: 200,
            }}>
                <CardContent>
                    <Typography
                        variant='h6'
                        align='left'>
                        Sample Title
                    </Typography>
                    <Typography
                        variant='subtitle1'
                        fontSize='14px'
                        align='left'
                        color='#696969'
                        gutterBottom>
                        Noah
                    </Typography>
                    <Typography
                        variant='body1'
                        fontSize='14px'
                        align='left'
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