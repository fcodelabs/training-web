import CustomizedButton from "../../components/Buttons/CustomizedButton";
import Header from "../../components/Header/Header";
import CustomDrawer from "../../components/CustomDrawer/CustomDrawer";
import useStyles from "./../../components/Inputs/InputStyles";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import DiaryCardWrapper from "../../components/DiaryCard/DiaryCardWrapper";
import { Alert, Snackbar } from "@mui/material";



interface Card {
  id: string;
  title: string;
  description: string;
}


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <div style={{ height: "fit-content", paddingBottom: '20px' }}>
      <Header />

      <div
        style={{
          margin: "0 60px",
          fontSize: "36px",
          fontWeight: "700",
          color:"#4B465C",
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
          /*flexDirection: "column", */
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
                <SearchIcon style={{color:"#4B465C"}}/>
              </InputAdornment>
            ),
          }}
          style={{ width: "530px" ,
        color:"#4B465C"}}
        onChange={(e)=> {setSearch(e?.target.value)}}
        />
        <br/>
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
        
        <DiaryCardWrapper searchText={search}/>
        
      </div>

      <CustomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} setSuccessMessage = {(val:boolean)=>setSuccess(val)}/>
      <Snackbar
        open={success}
        autoHideDuration={3000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Record Saved Successfully
        </Alert>
      </Snackbar>
    </div>
  );
}
