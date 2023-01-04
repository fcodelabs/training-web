import {FC} from "react";
import {Card, CardContent, makeStyles, Typography} from "@mui/material";
import './DiaryCard.scss'

type DiaryCardProps = {
    title: string;
    subtitle: string;
    description: string;
    color: string;
}


const DiaryCard: FC<DiaryCardProps>  = ({title, subtitle, description, color}: DiaryCardProps) => {
    return <div>
        <Card className={"diary-card"} style={{
            backgroundColor: color,
        }}>
            <CardContent>
                <Typography
                    className={"diary-card-title"}
                    variant={"h5"}
                >
                    {title}
                </Typography>
                <Typography
                    className={"diary-card-subtitle"}
                    variant={"subtitle1"}
                >
                    {subtitle}
                </Typography>
                <Typography
                    display={"block"}
                    className={"diary-card-description"}
                    variant={"body2"}
                    style={{ wordWrap: "break-word" }}
                >
                    {description.length>100 ? description.substring(0,100).concat(" ..."):description}
                </Typography>
                <Typography
                    className={"diary-card-show-more"}
                    variant={"body1"}
                >
                    {"SHOW MORE"}
                </Typography>
            </CardContent>
        </Card>
    </div>
}

export default DiaryCard;

