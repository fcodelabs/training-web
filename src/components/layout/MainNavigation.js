import React, {useContext} from "react";
import {AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {format} from "date-fns";
import {Link} from "react-router-dom";
import Cookies from 'js-cookie'
import AuthContext from "../util/authContext";
import {useHistory} from "react-router";

const drawerWidth = 10;
const useStyle = makeStyles((theme) => {
    return {
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginRight: 5,
            backgroundColor: "#00BCD4",
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1,
            cursor: "pointer",
        },
        menu: {
            margin: 20,
            cursor: "pointer",
        },
        forUL: {
            listStyle: "none",
            display: "flex",
            margin: 0,
            padding: 0,
            alignItems: "baseline",
        },
        forLI: {
            margin: 20,
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
        },
    };
});

function allDiaryRoute() {
    window.location = "/";
}


function MainNavigation() {
    const Auth = useContext(AuthContext);
    const classes = useStyle();
    const history = useHistory();

    function logOut() {
        Auth.setAuth(false);
        Cookies.remove("user", "loginTrue")
        console.log("Test")
        history.replace("/")

    }

    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography className={classes.date} onClick={allDiaryRoute}>
                        ToDay Is : {format(new Date(), "do MMM Y")}
                    </Typography>
                    <nav>
                        <ul className={classes.forUL}>
                            <li className={classes.forLI}>
                                <Link to="/all-diary" className={classes.forLI}>
                                    All Diary
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-diary" className={classes.forLI}>
                                    Add New Diary
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className={classes.forLI}>
                                    <span onClick={logOut}>LogOut</span>
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
