import { Avatar, Badge, Grid, IconButton } from "@mui/material";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Divider from "@mui/material/Divider";
import SearchBar from "./SearchBar";

const NavigatiionBar = () => {
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
            <Grid item>
              <SearchBar />
            </Grid>

            <Divider
              orientation="vertical"
              flexItem
              light
              variant="middle"
              sx={{ bgcolor: "white",ml:"30px"}}
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
