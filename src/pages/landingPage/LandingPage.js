import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { motion } from "framer-motion";

import { Button, OutlinedInput, makeStyles, TextField } from "@material-ui/core";
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

function LandingPage(props) {

    const state = useSelector(state => state.login.nickName)

    const dispatch = useDispatch();

    const [nickName, setNickName] = useState("");

    const [borderColor, setBorderColor] = useState('#34495e');

    const history = useHistory();

    const createStyle = makeStyles({
        labelStyle: {
            color: "#3498db"
        },
        borderStyle: {
            borderColor: '#3498db',
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

        if (nickName.trim.length == 0) {
            setBorderColor("#e74c3c")
            return false;
        } else {
            setBorderColor("#34495e")
            return true;
        }

    }

    ///routing to the diaryPage
    function routeToDiary() {
        if (validateNickName()) {
            history.push("/diary")
        } else {
            alert("empty")
        }
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
                    {/* <h1>Dear Diary</h1> */}
                    <h1>{state}</h1>
                </div>
                <div className="nickname-body">
                    <div className="nickname-body-mid">
                        <TextField
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
                            color="primary" variant="outlined" label="Enter your nickname"></TextField>
                        <Button
                            onClick={() => dispatch(nickNameSet("udara j"))}
                            variant="contained" color="primary">Random Name</Button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default LandingPage;