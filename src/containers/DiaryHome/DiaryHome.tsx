import CustomizedButton from "../../components/Buttons/CustomizedButton";
import Header from "../../components/Header/Header";
import CustomDrawer from "../../components/CustomDrawer/CustomDrawer";
import useStyles from "./../../components/Inputs/InputStyles";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Box, CircularProgress, InputAdornment, TextField } from "@material-ui/core";
import DiaryCardWrapper from "../../components/DiaryCard/DiaryCardWrapper";
import { useDispatch, useSelector } from "react-redux";


interface Card {
  id: string;
  title: string;
  description: string;
}


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const cards: Card[] = useSelector((state: any) => state.cards);

  return (
    <div style={{ height: "fit-content", paddingBottom: '20px' }}>
      <Header />

      <div
        style={{
          margin: "0 60px",
          fontSize: "36px",
          fontWeight: "700",
        }}
      >
        Home
      </div>

      <div
        style={{
          margin: "30px 60px 0 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <TextField
          size="small"
          id="outlined-basic"
          variant="outlined"
          placeholder="Placeholder"
          className={classes.root}
          InputLabelProps={{
            
            classes: {
              root: classes.customLabel,
            },
          }}
          InputProps={{
            className: classes.multilineColor,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ width: "530px" }}
        />

        <CustomizedButton
          label="Submit New"
          onClick={() => {
            setIsOpen(true);
          }}
        />

      </div>

      <div style={{
        margin: "47px 60px 0 60px",
      }}>
        
        <DiaryCardWrapper/>
        
      </div>

      <CustomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </div>
  );
}
