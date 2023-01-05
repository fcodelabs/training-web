import {FC, useEffect, useState} from "react";
import {Button, TextField, Typography} from '@mui/material';
import { uniqueNamesGenerator, Config, names } from "unique-names-generator";
 import "./SigninForm.scss";
import {Link, useNavigate} from "react-router-dom";
import {RootState, store} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {add} from "../DiaryHome/cardsSlice";
import {set} from "./userSlice";

const SignInForm: FC  = () => {

    useEffect(() => {
        document.title = 'Dear Diary - Login';
    }, []);

    // console.log(process.env.REACT_APP_TITLE)

    const [nickname, setNickname] = useState<string>('');

    const config: Config= {
        dictionaries: [names]
    }

    const navigate = useNavigate();

    const generateRandomNickname = (): void => {
        setNickname(uniqueNamesGenerator(config));
    };

    const dispatch = useDispatch()

    const handleSubmit = (): void => {
        dispatch(set(nickname));
        navigate('/home');
    };

    return <div className={"signin-page"}>
    <div className={"signin-box"}>

        <div className={"diary-title-text"} >
            <img src=
                     "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6MC43O2ZpbGw6I0ZGOTgwMDt9Cgkuc3Qxe29wYWNpdHk6MC43O2ZpbGw6IzAzQTlGNDt9Cgkuc3Qye29wYWNpdHk6MC43O2ZpbGw6IzhCQzM0QTt9Cgkuc3Qze29wYWNpdHk6MC43O2ZpbGw6IzlDMjdCMDt9Cgkuc3Q0e29wYWNpdHk6MC43O2ZpbGw6I0Y0NDMzNjt9Cgkuc3Q1e29wYWNpdHk6MC43O2ZpbGw6IzAwOTY4ODt9Cgkuc3Q2e29wYWNpdHk6MC43O2ZpbGw6IzNGNTFCNTt9Cgkuc3Q3e29wYWNpdHk6MC43O2ZpbGw6I0ZGRUIzQjt9Cgkuc3Q4e2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPGc+CgkJPGVsbGlwc2UgY2xhc3M9InN0MCIgY3g9IjUwIiBjeT0iMzMuNyIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MSIgY3g9IjUwIiBjeT0iNjYuMyIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MiIgY3g9IjY2LjMiIGN5PSI1MCIgcng9IjMyLjciIHJ5PSIxNS42Ii8+CgkJPGVsbGlwc2UgY2xhc3M9InN0MyIgY3g9IjMzLjciIGN5PSI1MCIgcng9IjMyLjciIHJ5PSIxNS42Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTE1LjkyOTggMzguNDU3OSkiIGNsYXNzPSJzdDQiIGN4PSIzOC41IiBjeT0iMzguNSIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTI1LjQ5MTYgNjEuNTQyMSkiIGNsYXNzPSJzdDUiIGN4PSI2MS41IiBjeT0iNjEuNSIgcng9IjE1LjYiIHJ5PSIzMi43Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTMyLjI1MjggNDUuMjE5MSkiIGNsYXNzPSJzdDYiIGN4PSIzOC41IiBjeT0iNjEuNSIgcng9IjMyLjciIHJ5PSIxNS42Ii8+CgkJCgkJCTxlbGxpcHNlIHRyYW5zZm9ybT0ibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTkuMTY4NiA1NC43ODA5KSIgY2xhc3M9InN0NyIgY3g9IjYxLjUiIGN5PSIzOC41IiByeD0iMzIuNyIgcnk9IjE1LjYiLz4KCTwvZz4KCTxjaXJjbGUgY2xhc3M9InN0OCIgY3g9IjUwIiBjeT0iNTAiIHI9IjEyLjYiLz4KPC9nPgo8L3N2Zz4K"
                 alt="Dear Diary" />

            <Typography className={"diary-title-text"}>Dear Diary</Typography>
        </div>

        <div className={"signin-title"} >Sign In</div>
        <div className={"input-row"}>
            <TextField className={"input-nickname"}
                   label="Your Nickname*"
                   value={nickname}
                   onChange={(event) => setNickname(event.target.value)}
            />
            <Button
                variant="contained"
                className={"random-button"}
                onClick={generateRandomNickname}
                color="primary"
            >
                RANDOM
            </Button>
        </div>
        <div className="continue-row">
            <Button className="continue-button"
                    variant="contained"
                    disabled={!nickname}
                    color="primary"
                    onClick={handleSubmit}
            >
                CONTINUE
            </Button>
        </div>
    </div>
    </div>
}

export default SignInForm;