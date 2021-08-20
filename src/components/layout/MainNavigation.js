import React from 'react';
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {format} from "date-fns";
import {Link} from "react-router-dom";

const drawerWidth = 10
const useStyle = makeStyles((theme) => {
    return {
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight: 5,
            backgroundColor:"#00BCD4"
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1,
            cursor:"pointer"
        },
        menu: {
            margin: 20,
            cursor: "pointer",

        },
        forUL:{
            listStyle:"none",
            display:"flex",
            margin:0,
            padding:0,
            alignItems:"baseline"
        },
        forLI:{
            margin:20,
            color:"white",
            textDecoration:"none",
            fontWeight:"bold"
        }

    }
})

function allDiaryRoute() {
    window.location = '/'
}

function MainNavigation() {
    const classes = useStyle();
    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.date} onClick={allDiaryRoute}>
                        ToDay Is : {format(new Date(), 'do MMM Y')}
                    </Typography>
                    <nav >
                        <ul className={classes.forUL}>
                            <li className={classes.forLI}>
                                <Link to='/all-diary' className={classes.forLI}>
                                    All Diary
                                </Link>
                            </li>
                            <li>
                                <Link to='/add-diary' className={classes.forLI}>
                                    Add New Diary
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MainNavigation;