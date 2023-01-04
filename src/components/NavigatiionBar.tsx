import { Avatar, Badge, Grid, IconButton, TextField } from "@mui/material";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Divider from "@mui/material/Divider";
import SearchBar from "./SearchBar";
// import { InputAdornment } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import {useState} from 'react';

const NavigatiionBar = () => {
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
          <IconButton>
            <Badge>
              <FullscreenRoundedIcon
                fontSize="large"
                sx={{ color: "#e3f2fd" }}
              />
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
