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
//Function to Create Todolist Card
function DearDiaryCard() {
    return (

        <Grid container>
            <Grid item xs={4}>
                <Card className='classes.card' >
                    <CardHeader style={{ backgroundColor: "lightgrey" }} action={
                        <IconButton><DeleteOutlineRounded /></IconButton>
                    } title={"Sample Title"}
                        subheader={"Name"}
                    />

                    <CardContent style={{ backgroundColor: "white" }}>
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