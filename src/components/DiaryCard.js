import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const DiaryCard = ({ title, subTitle, description, backgroundColor }) => {
    const [cardExpand, setCardExpand] = useState(false);

    return (
        <Card
            sx={{
                margin: "5%",
                width: 300,
                borderRadius: 5,
                backgroundColor: { backgroundColor },
            }}
        >
            <CardContent>
                <Typography variant="h4" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {subTitle}
                </Typography>
                <Typography variant="body2">
                    {!cardExpand
                        ? description.substring(0, 100) + "..."
                        : description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => setCardExpand(!cardExpand)}>
                    {cardExpand ? `Show Less` : `Show More`}
                </Button>
            </CardActions>
        </Card>
    );
};

export default DiaryCard;
