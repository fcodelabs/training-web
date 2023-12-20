import { useState } from "react";
import CustomizedButton from "../../components/Buttons/CustomizedButton";
import Logo from "../../components/Logo/Logo";
import useStyles from "./../../components/Inputs/InputStyles";
import RandomButton from "../../components/Buttons/RandomButton";


import Card from "@mui/material/Card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useNavigate } from "react-router-dom";
import { Snackbar, TextField } from "@material-ui/core";
import { Alert } from "@mui/material";
import { addUser } from "../../redux/reducers/userReducer";
import { addDoc, collection, getDocs, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";




export default function SignIn() {


const [username, setUsername] = useState("");
const [open, setOpen] = useState(false);


const navigate = useNavigate();
const classes = useStyles();
const dispatch = useDispatch();


//Function to generate random string
const generateRandomString = () => {


const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let result = "";


for (let i = 0; i < 8; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
result += characters.charAt(randomIndex);
}


setUsername(result);
console.log(result);
};


const checkUsernameExists = async (username: string): Promise<string | null> => {
try {
const userCollectionRef = collection(db, "Users");
const q = query(userCollectionRef, where("name", "==", username));
const querySnapshot = await getDocs(q);
if (!querySnapshot.empty) {
// Username exists
const userDoc = querySnapshot.docs[0];
const userId = userDoc.id;
console.log("Registered User", userId);
return userId; // Return user ID
} else {
// Username doesn't exists
console.log("Not a registered user");
return null;
}
} catch (error) {
console.error("Error checking username:", error);
return null;
}
};




//function to handle login
const handleContinue = async () => {
if (!username.trim()) {
setOpen(true);
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
dispatch(addUser({ id: res.id, name: username }));
navigate("/");
}
} catch (err) {
console.log(err);
}
} else {
dispatch(addUser({ id: userId, name: username }));
navigate("/");
}
};


const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {


if (reason === 'clickaway') {
return;
}
setOpen(false);


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




<Card
style={{
width: "fit-content",
height: "fit-content",
padding: "20px",
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
<div
style={{
display: "flex",
alignItems: "center",
gap: "16px",
marginBottom: "16px",
}}
>
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
style={{ width: "352px" }}
value={username}
onChange={(e) => setUsername(e.target.value)}
/>


<RandomButton label="Random" onClick={generateRandomString} />


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





