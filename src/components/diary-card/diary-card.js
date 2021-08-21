import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        textAlign: "start",
        backgroundColor: "#b3e9fe"
    },
    title: {
        fontSize: 20
    },
    name: {
        marginBottom: "10px"
    },
    button: {
        fontWeight: 600
    }
});

function DiaryCard(props) {

    const classes = useStyles();
    const [isMore, setMore] = useState(false)

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} >
                    {props.title}
                </Typography>
                <Typography className={classes.name} color="textSecondary">
                    {props.name}
                </Typography>
                <Typography variant="body2" component="p">
                    {isMore? props.description : props.description.substring(0, 100).concat(" ...")}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.button} size="small" onClick={() => setMore(!isMore)}>SHOW MORE</Button>
            </CardActions>
        </Card>
    )
}

export default DiaryCard