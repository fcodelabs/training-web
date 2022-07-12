import React, { useState } from 'react'
import { Box, Button, Collapse, Container, Paper } from '@mui/material'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import { makeStyles } from '@material-ui/core/styles'
import styled from '@emotion/styled'
import IconButton from '@mui/material/IconButton'
import { ExpandMoreRounded } from '@material-ui/icons'


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



const useStyles = makeStyles({
    cardLayout: {
        color: "black",
        opacity: "90%",
        borderRadius: "20px",
        margin: "40px",


    },
    btn: {
        borderRadius: "20px"
    }

})

//Function to Create Todolist Card
function DearDiaryCard({ title, description, header, length }) {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.log(length)

    const classes = useStyles()
    return (
        <Box sx={
            { height: '150px', width: '400px' }
        }>
            <Card className={classes.cardLayout} >

                <CardHeader style={{ backgroundColor: "#66BFBF" }} title={title}
                    subheader={header}
                />

                {
                    (length > 20) ?
                        <CardContent>
                            <Collapse in={expanded} collapsedSize={5} timeout="auto" unmountOnExit >
                                {

                                    <Typography variant="body2" color="black">
                                        {description}
                                    </Typography>

                                }
                            </Collapse>
                        </CardContent>
                        : (<CardContent>
                            <Typography variant="body2" color="black">
                                {description}
                            </Typography>
                        </CardContent>)
                }
                <div>
                    <CardActions>

                        {
                            (length > 100) ?
                                <ExpandMore expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"> <Button>Show More </Button></ExpandMore>
                                : null
                        }
                    </CardActions>
                </div>
            </Card>

        </Box>
    )
}

export default DearDiaryCard