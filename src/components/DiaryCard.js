import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const DiaryCard = ({ title, userName, description, backgroundColor }) => {
    const [cardExpand, setCardExpand] = useState(false);

    return (
        <Card
            sx={{
                margin: "5%",
                width: 300,
                borderRadius: 5,
                backgroundColor: { backgroundColor },
                opacity: 0.75,
            }}
        >
            <CardContent>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: 600 }}
                >
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {userName}
                </Typography>
                <Typography variant="body2">
                    {!cardExpand && description.length > 100
                        ? description.substring(0, 100) + "..."
                        : description}
                </Typography>
            </CardContent>
            <CardActions>
                {description.length > 100 ? (
                    <Button
                        size="small"
                        onClick={() => setCardExpand(!cardExpand)}
                    >
                        {cardExpand ? `Show Less` : `Show More`}
                    </Button>
                ) : null}
            </CardActions>
        </Card>
    );
};

export default DiaryCard;
