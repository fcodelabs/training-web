import {FC, useEffect, useState} from "react";
import {Card, CardContent, makeStyles, Typography} from "@mui/material";
import './DiaryCard.scss'

type DiaryCardProps = {
    title: string;
    subtitle: string;
    description: string;
    color: string;
}

const truncate = (size: number, message: string) => {
    return message.length>size ? message.substring(0,size).concat("..."):message
}

const processDescription = (description: string, seeMore: boolean) => {
    if(!seeMore){
        return truncate(100, description)
    }else{
        return description
    }
}


const DiaryCard: FC<DiaryCardProps>  = ({title, subtitle, description, color}: DiaryCardProps) => {

    const [showMore, setShowMore] = useState<boolean>(false)

    useEffect(() => {}, [showMore]);

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
                    {processDescription(description, showMore)}
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
                    description.length > 100 && showMore && <Typography
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

