import React from 'react'
import { Button, Container, Paper } from '@mui/material'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { DeleteOutlineRounded } from '@material-ui/icons'
import CardActions from '@mui/material/CardActions'
import { teal } from '@mui/material/colors'
import { makeStyles } from '@material-ui/core/styles'
import { borderRadius, padding } from '@mui/system'

const useStyles = makeStyles({
    cardLayout: {
        color: "black",
        opacity: "90%",
        borderRadius: "20px",
        margin : "40px",
    },
    btn : {
        borderRadius: "20px"
    }
    
})

//Function to Create Todolist Card
function DearDiaryCard() {
    const classes = useStyles()
    return (

        <Grid container>
            <Grid item xs={4}>
                <Card className={classes.cardLayout }>
                    <CardHeader style={{ backgroundColor: "#66BFBF" }} action={
                        <IconButton><DeleteOutlineRounded /></IconButton>
                    } title={"Sample Title"}
                        subheader={"Name"}
                    />

                    <CardContent >
                        <Typography variant="body2" color="black">
                            Simple test 1
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button> Show More </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

export default DearDiaryCard