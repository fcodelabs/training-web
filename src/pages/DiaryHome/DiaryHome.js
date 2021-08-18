//imporing modules
//importing hooks
import React, {useState} from 'react'
//hook for style material components
import {
    AppBar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    makeStyles,
    TextField,
    Toolbar
} from '@material-ui/core';
//import css files
import '../../normalize.css'
import './diaryPage.css'
//Masonary css for grid

const styles = makeStyles({
    btn: {
        color: "white",
        border: "2px solid white",
        '&:hover': {
            background: "white",
            color: "#34495e"
        },
    },
    text: {
        borderRadius: "10px",
        borderWidth: "2px",
        borderColor: '#3498db !important',
    },
    areaText: {
        borderRadius: "10px",
        borderWidth: "2px",
        borderColor: '#3498db !important',
    },
    hidden: {
        color: '#3498db'
    }
})

function DiaryHome() {

    const clasess = styles()

    const breakpoints = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    }

    const [open, setOpen] = useState(false);
    const [formData, setData] = useState({
        title: "",
        description: ""
    });

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    function submitForm() {

        console.log(`
            title: ${formData.title}\n
            description: ${formData.description}
        `)
        handleClose()
    }


    return (
        <div className="diary-container fld-clm">
            <AppBar className="appbar" position="static">
                <Toolbar>
                </Toolbar>
            </AppBar>
            <div className="data-form center d-flex">
                <Button
                    className={clasess.btn}
                    variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add Note
                </Button>
                <Dialog
                    fullWidth={true}
                    onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle
                        style={{color: "#ED4C67"}}
                        id="customized-dialog-title" onClose={handleClose}>
                        Add Note
                    </DialogTitle>
                    <DialogContent dividers>
                        <FormControl fullWidth={true}>
                            <TextField
                                onChange={(e) => {
                                    setData(prevState => ({
                                        ...prevState,
                                        title: e.target.value
                                    }))
                                }}
                                required={true}
                                // onChange={}
                                InputProps={{
                                    classes: {
                                        notchedOutline: clasess.text,
                                    }
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: clasess.hidden
                                    }
                                }}
                                style={{width: "100%"}}
                                fullWidth={true}
                                id="outlined-basic" label="Outlined" variant="outlined"/>
                            <br/>
                            <TextField
                                onChange={(e) => {
                                    setData(prevState => ({
                                        ...prevState,
                                        description: e.target.value
                                    }))
                                }}
                                InputProps={{
                                    classes: {
                                        root: clasess.areaText,
                                        notchedOutline: clasess.areaText
                                    }
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: clasess.hidden
                                    }
                                }}
                                style={{width: "100%"}}
                                fullWidth={true}
                                multiline={4}
                                rows={10}
                                id="outlined-basic" label="Outlined" variant="outlined"/>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={() => {
                            submitForm()
                        }} variant={"contained"} color="secondary">
                            SUBMIT
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            {/*<div className="data-grid">*/}
            {/*    <Masonry*/}
            {/*        breakpointCols={breakpoints}*/}
            {/*        className="my-masonry-grid"*/}
            {/*        columnClassName="my-masonry-grid_column"*/}
            {/*    >*/}
            {/*        <div className="diary-card">*/}
            {/*            <DiaryCard*/}
            {/*                title="Title"*/}
            {/*                subtitle="subtitle"*/}
            {/*                description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss"/>*/}
            {/*        </div>*/}
            {/*        <div className="diary-card">*/}
            {/*            <DiaryCard*/}
            {/*                title="Title"*/}
            {/*                subtitle="subtitle"*/}
            {/*                description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss"/>*/}
            {/*        </div>*/}
            {/*        <div className="diary-card">*/}
            {/*            <DiaryCard*/}
            {/*                title="Title"*/}
            {/*                subtitle="subtitle"*/}
            {/*                description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss*/}
            {/*        descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss"/>*/}
            {/*        </div>*/}
            {/*        <div className="diary-card">*/}
            {/*            <DiaryCard*/}
            {/*                title="Title"*/}
            {/*                subtitle="subtitle"*/}
            {/*                description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss"/>*/}
            {/*        </div>*/}
            {/*        <div className="diary-card">*/}
            {/*            <DiaryCard*/}
            {/*                title="Title"*/}
            {/*                subtitle="subtitle"*/}
            {/*                description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss"/>*/}
            {/*        </div>*/}
            {/*        <div className="diary-card">*/}
            {/*            <DiaryCard*/}
            {/*                title="Title"*/}
            {/*                subtitle="subtitle"*/}
            {/*                description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss"/>*/}
            {/*        </div>*/}
            {/*        <div className="diary-card">*/}
            {/*            <DiaryCard*/}
            {/*                title="Title"*/}
            {/*                subtitle="subtitle"*/}
            {/*                description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss"/>*/}
            {/*        </div>*/}
            {/*        <div className="diary-card">*/}
            {/*            <DiaryCard*/}
            {/*                title="Title"*/}
            {/*                subtitle="subtitle"*/}
            {/*                description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss"/>*/}
            {/*        </div>*/}
            {/*        <div className="diary-card">*/}
            {/*            <DiaryCard*/}
            {/*                title="Title"*/}
            {/*                subtitle="subtitle"*/}
            {/*                description="descriptionss descriptionss descriptionss descriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionssdescriptionss"/>*/}
            {/*        </div>*/}
            {/*    </Masonry>*/}
            {/*</div>*/}
            {/*<footer class="footer d-flex">*/}
            {/*    <Typography style={{paddingBottom: 5}} gutterBottom variant="subtitle1">*/}
            {/*        &copy; 2021 Fcode labs | All the copyrights reserved*/}
            {/*    </Typography>*/}
            {/*</footer>*/}
        </div>
    )
}

export default DiaryHome
