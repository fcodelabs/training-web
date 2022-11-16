import { Grid, Typography, TextField, Container } from "@mui/material";
import React from "react";
import './Styles.css';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img from './img.jpg';
import { useSelector, useDispatch } from 'react-redux'
import { enable, disable, setNickname } from './SignInSlice'
import { useState } from "react";
import { Link } from "react-router-dom";




export default function SignInPage() {

    const names = ["John", "Nick", "Anne", "Henry", "James", "Robert", "William", "Merry"];
    const dispatch = useDispatch();
    const nickname = useSelector(state => state.signIn.nickname);
    const [disabled,setDisabled] =useState(true)
    
    
    function generateRandomName() {
        const random = names[Math.floor(Math.random() * names.length)];
        dispatch(setNickname(random));
        setDisabled(false);

    }


    return (

        <Grid style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'

        }} >

            <Container maxWidth="sm" >


                <div className="card">
                    <div className="flex">
                        <img className="logo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6MC43O2ZpbGw6I0ZGOTgwMDt9Cgkuc3Qxe29wYWNpdHk6MC43O2ZpbGw6IzAzQTlGNDt9Cgkuc3Qye29wYWNpdHk6MC43O2ZpbGw6IzhCQzM0QTt9Cgkuc3Qze29wYWNpdHk6MC43O2ZpbGw6IzlDMjdCMDt9Cgkuc3Q0e29wYWNpdHk6MC43O2ZpbGw6I0Y0NDMzNjt9Cgkuc3Q1e29wYWNpdHk6MC43O2ZpbGw6IzAwOTY4ODt9Cgkuc3Q2e29wYWNpdHk6MC43O2ZpbGw6IzNGNTFCNTt9Cgkuc3Q3e29wYWNpdHk6MC43O2ZpbGw6I0ZGRUIzQjt9Cgkuc3Q4e2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjUwIiBjeT0iMzMuNyIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjUwIiBjeT0iNjYuMyIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MiIgY3g9IjY2LjMiIGN5PSI1MCIgcng9IjMyLjciIHJ5PSIxNS42Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MyIgY3g9IjMzLjciIGN5PSI1MCIgcng9IjMyLjciIHJ5PSIxNS42Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTE1LjkyOTggMzguNDU3OSkiIGNsYXNzPSJzdDQiIGN4PSIzOC41IiBjeT0iMzguNSIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTI1LjQ5MTYgNjEuNTQyMSkiIGNsYXNzPSJzdDUiIGN4PSI2MS41IiBjeT0iNjEuNSIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTMyLjI1MjggNDUuMjE5MSkiIGNsYXNzPSJzdDYiIGN4PSIzOC41IiBjeT0iNjEuNSIgcng9IjMyLjciIHJ5PSIxNS42Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTkuMTY4NiA1NC43ODA5KSIgY2xhc3M9InN0NyIgY3g9IjYxLjUiIGN5PSIzOC41IiByeD0iMzIuNyIgcnk9IjE1LjYiLz4KCTwvZz4KCTxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjUwIiBjeT0iNTAiIHI9IjEyLjYiLz4KPC9nPgo8L3N2Zz4K" alt="" />
                        <Typography >Dear Diary</Typography>
                    </div>

                    <div>
                        <div className="center"> <Typography variant="h4" color='#039BE5' >Sign In</Typography></div>
                        <div className="center d1">
                            <TextField
                                value={nickname}
                                id="outlined-basic"
                                label="Your Nickname*"
                                variant="outlined"
                                className="txt"
                                onChange={(e) => {
                                    (e.target.value === "") ?  setDisabled(true) :  setDisabled(false);;

                                    dispatch(setNickname(e.target.value));

                                }}
                            />

                            <Button variant="contained" size="sm" style={{ margin: '3vh', borderRadius: '30px' }} onClick={generateRandomName}>RANDOM</Button>
                        </div>

                        <div className="center">
                            <Button disabled={disabled} variant="contained" size="sm" endIcon={<ArrowForwardIcon />} style={{ marginBottom: '3vh', borderRadius: '30px' }}><Link to="home" style={{textDecoration:"none",color:"white"}}>CONTINUE</Link></Button>
                        </div>

                    </div>

                </div>
            </Container>
        </Grid>


    );
}