import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion";

import { Button, OutlinedInput, makeStyles, TextField, Typography } from "@material-ui/core";
//imporing css
import './landinPage.css'
import { useDispatch, useSelector } from "react-redux";
import { loginTest, nickNameSet } from "./redux/loginAction";

const containerConstraint = {
    hidden: {
        opacity: 0
    },
    visible: {
        transition: { delay: 1, duration: 1 },
        opacity: 1,
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeOut' },
    }
}

const nickNameArr = [
    "Gordan", "Peter", "Linux", "REX", "$!N!$teR", "Lochana", "Gathsara", "Bumblebee"
]

function LandingPage(props) {

    const state = useSelector(state => state.login.nickName)

    const dispatch = useDispatch();

    const [nickName, setNickName] = useState("");

    const [borderColor, setBorderColor] = useState('#3498db');

    const [errMsg, setErrMsg] = useState("")

    const history = useHistory();

    const createStyle = makeStyles({
        labelStyle: {
            color: borderColor
        },
        borderStyle: {
            borderColor: borderColor,
            borderWidth: 2,
            '&:hover': {
                background: "white",
                color: borderColor
            },
        }
    })

    const style = createStyle()

    ///validating nickname
    function validateNickName() {

        if (nickName.trim().length == 0) {
            setBorderColor("#e74c3c")
            return false;
        } else {
            setBorderColor("#3498db")
            return true;
        }

    }

    ///routing to the diaryPage
    function routeToDiary() {
        if (validateNickName()) {
            history.push("/diary")
        } else {
            setErrMsg("*You must enter a nickname for enter")
        }
    }

    function randomNameGenerate() {

        const rndNickName = nickNameArr[Math.floor(Math.random() * nickNameArr.length)]

        setNickName(rndNickName)
    }

    return (
        <motion.div
            variants={containerConstraint}
            initial="hidden"
            animate='visible'
            exit='exit'
            className="container center ladning-contaner">
            <div className="nickname-container">
                <div className="nickName-upper">
                    <h1>Dear Diary</h1>
                </div>
                <div className="nickname-body">
                    <div className="nickname-body-mid">
                        <TextField
                            onChange={(e) => { setNickName(e.target.value) }}
                            style={{ width: "80%" }}
                            InputLabelProps={{
                                classes: {
                                    root: style.labelStyle
                                }
                            }}
                            InputProps={{
                                classes: {
                                    notchedOutline: style.borderStyle
                                }
                            }}
                            color="primary" variant="outlined" value={nickName} label="Enter your nickname"></TextField>
                        <Button
                            onClick={() => randomNameGenerate()}
                            variant="contained" color="primary">Random Name</Button>
                    </div>
                    <br />
                    <Typography variant="subtitle1" color="secondary">{errMsg}</Typography>
                    <br />
                    <Button
                        onClick={() => routeToDiary()}
                        variant="contained" color="secondary"><Typography variant="h5">SUBMIT</Typography></Button>

                </div>

            </div>
        </motion.div>
    )
}

export default LandingPage;