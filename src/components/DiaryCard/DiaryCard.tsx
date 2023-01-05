import {FC, useEffect, useState} from "react";
import {Card, CardContent, makeStyles, Typography} from "@mui/material";
import './DiaryCard.scss'

type DiaryCardProps = {
    title: string;
    subtitle: string;
    description: string;
    color: string;
}


const DiaryCard: FC<DiaryCardProps>  = ({title, subtitle, description, color}: DiaryCardProps) => {

    const [showMore, setShowMore] = useState<boolean>(false)

    useEffect(() => {
        document.title = 'Dear Diary - Home Page';

    }, [showMore]);

    // console.log(title)
    // console.log(subtitle)
    // console.log(description)
    // console.log(color)

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
                    {description!=undefined && description.length>100 && !showMore ? description.substring(0,100).concat(" ..."):description}
                </Typography>
                {
                    description.length>100 && !showMore && <Typography
                        className={"diary-card-show-more"}
                        variant={"body1"}
                        onClick={
                            ()=>{
                                setShowMore(true)
                            }
                        }
                    >
                        {"SHOW MORE"}
                    </Typography>
                }
                {
                    description!=undefined && description.length>100 && showMore && <Typography
                        className={"diary-card-show-more"}
                        variant={"body1"}
                        onClick={
                            ()=>{
                                setShowMore(false)
                            }
                        }
                    >
                        {"SHOW LESS"}
                    </Typography>
                }
            </CardContent>
        </Card>
    </div>
}

export default DiaryCard;

