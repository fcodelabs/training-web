
import getrandomName from "../Random/RandomNameGenerator";
import "./SignInPage.css";
import Deardiary from "../../../components/DearDiary/DearDiary";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store/hooks";
import { setUserName } from "../../../redux/features/user/userSlice";

const SignInPage = () => {
    const dispatch = useAppDispatch()
    const name = useAppSelector((state) => state.user.userName)
    const [nameRandom, SetRandomName] = useState("")

    useEffect(() => {
    
      return () => {
        dispatch(setUserName(nameRandom))
      }
    }, [nameRandom])
    

    return (
        <div className="signin-page-wrapper">
            <div className="signin-page">

                <Deardiary />

                <div className="signin-page-form-wrapper">
                    <div className="sign-in-title">
                        Sign In
                    </div>

                    <form className="sign-in-form">
                        <TextField
                            id="outlined-basic"
                            label="user name"
                            variant="outlined"
                            className="text-field-login"
                            size="small"
                            value={nameRandom}
                            onChange={(e) => SetRandomName(e.target.value)} />

                        <div className="random-button">
                            <Button variant="contained" className="btn-random" style={{ textTransform: 'none' }} onClick={() => SetRandomName(getrandomName)}>
                                Random
                            </Button>
                        </div>
                    </form>

                    <div className="signin-submit-button">
                        <Link to ="/home">
                            <Button variant="contained" className="btn-continue" style={{ textTransform: 'none' }}>
                                Continue
                                <ArrowForwardIcon />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;