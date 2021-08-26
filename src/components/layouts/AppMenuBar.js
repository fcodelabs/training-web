import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { AccountCircle } from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Divider from "@material-ui/core/Divider";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

/*Styling*/
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `linear-gradient(-45deg, #039BE5 0%, #039BE5 33%, #00BCD4 100%)`,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: 30,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
  notificationPane: {
    "& div": {
      borderRadius: 10,
    },
    "& div ul": {
      width: 300,
    },
    "& div li": {
      height: 80,
    },
  },
  profilePane: {
    "& div": {
      borderRadius: 10,
    },
    "& div li": {
      height: 45,
    },
  },
}));

function AppMenuBar() {
  const classes = useStyles();

  //states
  const [isNotificationPaneOpen, setNotificationOpen] = React.useState(null);
  const [isProfilePaneOpen, setProfileOpen] = React.useState(null);

  const openNotificationPane = Boolean(isNotificationPaneOpen);
  const openProfilePane = Boolean(isProfilePaneOpen);

  //open notification pane
  const notificationOpen = (event) => {
    setNotificationOpen(event.currentTarget);
  };

  //close notification pane
  const notificationClose = () => {
    setNotificationOpen(null);
  };

  //open profile pane
  const profileOpen = (event) => {
    setProfileOpen(event.currentTarget);
  };

  //close profile pane
  const profileClose = () => {
    setProfileOpen(null);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.root} variant="outlined">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {" "}
            Dear Diary
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div>
            <IconButton
              aria-label="notifications"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={notificationOpen}
              color="inherit"
            >
              <Badge badgeContent={1} color="secondary" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={isNotificationPaneOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openNotificationPane}
              onClose={notificationClose}
              className={classes.notificationPane}
            >
              <MenuItem onClick={notificationClose}>Notification 1</MenuItem>
              <Divider variant="inset" />
              <MenuItem onClick={notificationClose}>Notification 2</MenuItem>
              <Divider variant="inset" />
              <MenuItem onClick={notificationClose}>Notification 3</MenuItem>
              <Divider variant="inset" />
              <MenuItem onClick={notificationClose}>Notification 4</MenuItem>
              <Divider variant="inset" />
              <MenuItem onClick={notificationClose}>Notification 5</MenuItem>
              <Divider variant="inset" />
            </Menu>
          </div>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={profileOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={isProfilePaneOpen}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openProfilePane}
              onClose={profileClose}
              className={classes.profilePane}
            >
              <MenuItem onClick={profileClose}>My Profile</MenuItem>
              <MenuItem onClick={profileClose}>My Calendar</MenuItem>
              <MenuItem onClick={profileClose}>
                My Inbox&nbsp;&nbsp;&nbsp;&nbsp;
                <Badge badgeContent={1} color="secondary" />
              </MenuItem>
              <Divider variant="fullWidth" />
              <MenuItem onClick={profileClose}>
                <ExitToAppIcon /> &nbsp;&nbsp;Log Out
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppMenuBar;
