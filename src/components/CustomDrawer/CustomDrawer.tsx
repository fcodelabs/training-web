import { Box, Drawer, Snackbar, TextField } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import CustomizedButton from "../Buttons/CustomizedButton";
import useStyles, { Textarea } from "./../Inputs/InputStyles";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { addCard } from "../../redux/reducers/cardReducer";
import { Alert, AlertColor } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { db } from "../../firebase";
import { useTypedSelector } from "../../redux/store/store";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}


export default function CustomDrawer({ isOpen, onClose }: DrawerProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: '',
    severity: 'success',
  });

  const currentUsername = useTypedSelector((state) => state.users.currentUsername);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setSnackbar({
        open: true,
        message: 'Please fill out all required fields',
        severity: 'error',
      });
      return;
    }

    try {
      const res = await addDoc(collection(db, "Cards"), {
        title: title,
        description: description,
        username: currentUsername,
        timeStamp: serverTimestamp(),
      });

      if (res) {
        onClose(); 
        dispatch(addCard({ id: res.id, title, description, username: currentUsername, }));
        setSnackbar({
          open: true,
          message: 'Successfully submitted',
          severity: 'success',
        });
        setTitle('');
        setDescription('');
        
      }
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        message: 'An error occurred',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  


  return (
    <>
    <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
       
       
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
    </>
  );
}