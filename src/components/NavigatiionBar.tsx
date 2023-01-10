import { Avatar, Badge, Grid, IconButton, TextField } from "@mui/material";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Divider from "@mui/material/Divider";
import SearchBar from "./SearchBar";
import { createStaticHandler } from "@remix-run/router";
// import { InputAdornment } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import {useState} from 'react';

const NavigatiionBar = (props: {handler:any}) => {
  // const [width, setWidth] = useState("235px")
  
  return (
    <div>
      <Grid
        container
        spacing={1}
        display="flex"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item mx={3}>
          <IconButton title={!props.handler.active ? "Enter to full screen" : "Exit from full screen"}>
            <Badge>
              {!props.handler.active && (
                <FullscreenRoundedIcon
                  fontSize="large"
                  sx={{ color: "#e3f2fd" }}
                  onClick={props.handler.enter}
                />
              )}
              {props.handler.active && (
                <FullscreenRoundedIcon
                  fontSize="large"
                  sx={{ color: "#e3f2fd" }}
                  onClick={props.handler.exit}
                />
              )}
            </Badge>
          </IconButton>
        </Grid>

        <Grid item>
          <Grid
            container
            spacing={1}
            display="flex"
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item justifyContent="flex-end">
              <SearchBar />

              {/* <TextField
                  onFocus={()=>{setWidth("500px")}}
                  size="small"
                  placeholder="Search Ui"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& fieldset": {
                      borderRadius: "25px",
                      backgroundColor: "rgba(0,0,0,0.1)",
                      width: {width},
                    },
                  }}
                /> */}
            </Grid>

            <Divider
              orientation="vertical"
              flexItem
              light
              variant="middle"
              sx={{ bgcolor: "white", ml: "30px" }}
            />

            <Grid item>
              <IconButton>
                <Badge>
                  <NotificationsNoneOutlinedIcon fontSize="large" />
                </Badge>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <Badge>
                  <Avatar sx={{ bgcolor: "purple" }} />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavigatiionBar;
