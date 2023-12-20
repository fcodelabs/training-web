import { Box, Drawer, Snackbar, TextField } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import CustomizedButton from "../Buttons/CustomizedButton";
import useStyles, { Textarea } from "./../Inputs/InputStyles";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { addCard } from "../../redux/reducers/cardReducer";
import { Alert } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { db } from "../../firebase";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}


export default function CustomDrawer({ isOpen, onClose }: DrawerProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [open, setOpen] = useState(false);
 

  const handleSubmit = async (e:any) => {

    e.preventDefault();

     if (!title.trim()) {
      setOpen(true);
      return;
    }

    if (!description.trim()) {
      setOpen(true);
      return;
    }

    let res;    

    try{
        res = await addDoc(collection(db, "Cards"), {
        title: title,
        description: description,
        timeStamp: serverTimestamp()
      });
  
      console.log(res);

    }catch(err){
      console.log(err)
    }

    if (res) {
      dispatch(addCard({ id: res.id, title, description }));
    }

    setTitle("");
    setDescription("");

  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Note archived"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Please fill out all required fields
          </Alert>
      </Snackbar>
      <Box style={{ width: "400px" }} role="presentation">

        {/* Header */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px",
          }}
        >
          <div
            style={{
              color: "#4B465C",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Submit New
          </div>
          <div
            style={{
              width: "38px",
              height: "38px",
              background: "#4B465C29",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </div>
        </div>

        {/* Form */}

        <div
          style={{
            padding: "0 24px 16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: "400",
              color: "#4B465C",
            }}
          >
            Title
          </div>

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
            }}
            style={{ width: "352px" }}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div
          style={{
            padding: "0 24px 16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: "400",
              color: "#4B465C",
            }}
          >
            Description
          </div>

        

        <Textarea
          minRows={15}
          placeholder="Placeholder"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        </div>

        <div
          style={{
            padding: "0 24px",
            display: "flex",
            gap: "16px",
          }}
        >
          <CustomizedButton label="Submit" onClick={handleSubmit} />
          <CustomizedButton label="Cancel" onClick={onClose} secondary />
        </div>
      </Box>
    </Drawer>
  );
}
