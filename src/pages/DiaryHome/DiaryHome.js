//imporing modules
import React from 'react'
import DiaryCard from '../../components/DiaryCard'
import {
    Typography,
    Button,
    AppBar,
    Toolbar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@material-ui/core';

//hook for style material components
import { makeStyles } from '@material-ui/core';


//import css files
import '../../normalize.css'
import './diaryPage.css'

//Masonary css for grid
import Masonry from 'react-masonry-css'

//importing hooks
import { useState } from 'react';

const styles = makeStyles({
    btn: {
        color: "white",
        border: "2px solid white",
        '&:hover': {
            background: "white",
            color: "#34495e"
        },
    }
})

function DiaryHome() {

    const classess = styles()

    const breakpoints = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    }

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="diary-container fld-clm">
            {/* <AppBar className="appbar" position="static">
                <Toolbar>

                </Toolbar>
            </AppBar>
            <div className="data-form center d-flex">
                <Button
                    className={classess.btn}
                    variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add Note
                </Button>
                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Add Note
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                            lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className="data-grid">
                <Masonry
                    breakpointCols={breakpoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    <div className="diary-card">
                        <DiaryCard
                            title="Title"
                            subtitle="subtitle"
                            description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss" />
                    </div>
                    <div className="diary-card">
                        <DiaryCard
                            title="Title"
                            subtitle="subtitle"
                            description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss" />
                    </div>
                    <div className="diary-card">
                        <DiaryCard
                            title="Title"
                            subtitle="subtitle"
                            description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss
                    descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss" />
                    </div>
                    <div className="diary-card">
                        <DiaryCard
                            title="Title"
                            subtitle="subtitle"
                            description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss" />
                    </div>
                    <div className="diary-card">
                        <DiaryCard
                            title="Title"
                            subtitle="subtitle"
                            description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss" />
                    </div>
                    <div className="diary-card">
                        <DiaryCard
                            title="Title"
                            subtitle="subtitle"
                            description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss" />
                    </div>
                    <div className="diary-card">
                        <DiaryCard
                            title="Title"
                            subtitle="subtitle"
                            description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss" />
                    </div>
                    <div className="diary-card">
                        <DiaryCard
                            title="Title"
                            subtitle="subtitle"
                            description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss" />
                    </div>
                    <div className="diary-card">
                        <DiaryCard
                            title="Title"
                            subtitle="subtitle"
                            description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss" />
                    </div>
                </Masonry>
            </div>
            <footer class="footer d-flex">
                <Typography style={{ paddingBottom: 5 }} gutterBottom variant="subtitle1">
                    &copy; 2021 Fcode labs | All the copyrights reserved
                </Typography>
            </footer> */}
        </div>
    )
}

export default DiaryHome
