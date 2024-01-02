import { useEffect, useState } from "react";
import CustomizedButton from "../../components/Buttons/CustomizedButton";
import Logo from "../../components/Logo/Logo";
import useStyles from "./../../components/Inputs/InputStyles";
import RandomButton from "../../components/Buttons/RandomButton";

import Card from "@mui/material/Card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { AlertColor } from "@mui/material";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { captureUsername } from "../../redux/saga/userSaga";
import { generateRandomString } from "../../utility/generateRandomString";
import { checkUsernameExists } from "../../utility/checkUsernameExists";
import CustomSnackbar from "../../components/CustomSnackbar/CustomSnackbar";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const navigate = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();

  //function to handle login
  const handleContinue = async () => {
    if (!username.trim()) {
      setSnackbar({
        open: true,
        message: "Please fill out all required fields",
        severity: "error",
      });
      return;
    }

    const userId = await checkUsernameExists(username);

    if (userId == null) {
      try {
        const res = await addDoc(collection(db, "Users"), {
          name: username,
          timeStamp: serverTimestamp(),
        });

        console.log(res);

        if (res) {
          dispatch(captureUsername(username));
          setSnackbar({
            open: true,
            message: "Login Successful",
            severity: "success",
          });
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      dispatch(captureUsername(username));
      setSnackbar({
        open: true,
        message: "Login Successful",
        severity: "success",
      });
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const [flexDirection, setFlexDirection] = useState<"row" | "column">("row");
  const [textFieldWidth, setTextFieldWidth] = useState("352px");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setFlexDirection("column");
        setTextFieldWidth("fit-content");
      } else {
        setFlexDirection("row");
        setTextFieldWidth("352px");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardStyles = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "16px",
    flexDirection: flexDirection,
  };

  const textFieldStyle = {
    width: textFieldWidth,
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />

      <Card
        style={{
          width: "fit-content",
          height: "fit-content",
          padding: "20px",
          margin: "15px",
        }}
        sx={{ boxShadow: "0px 4px 18px 0px #4B465C1A" }}
      >
        <Logo />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "36px",
              fontWeight: "700",
              color: "#0092DD",
              margin: "24px 0",
            }}
          >
            Sign In
          </div>
          <div style={cardStyles}>
            <TextField
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="Your Nickname*"
              className={classes.root}
              InputLabelProps={{
                classes: {
                  root: classes.customLabel,
                },
              }}
              InputProps={{
                className: classes.multilineColor,
              }}
              style={textFieldStyle}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <RandomButton
              label="Random"
              onClick={() => setUsername(generateRandomString())}
            />
          </div>

          <CustomizedButton
            label="Continue"
            onClick={handleContinue}
            icon={<ArrowRightAltIcon />}
          />
        </div>
      </Card>
    </div>
  );
}
