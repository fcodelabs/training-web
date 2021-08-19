import React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {format} from "date-fns";


const drawerWidth = 10
const useStyle = makeStyles((theme) => {
    return {
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight: 5
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1,
            cursor:"pointer"
        },
        menu: {
            margin: 20,
            cursor: "pointer",

        }

    }
})

function allDiaryRoute() {
    window.location = '/all-diary'
}


function homeRoute() {
    window.location = '/'
}


function MainNavigation(props) {
    const classes = useStyle();
    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.date} onClick={allDiaryRoute}>
                        ToDay Is : {format(new Date(), 'do MMM Y')}
                    </Typography>
                    <Typography className={classes.menu} onClick={allDiaryRoute}>
                        All Diary's
                    </Typography>
                    <Typography className={classes.menu} onClick={homeRoute}>
                        Add New Diary
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MainNavigation;