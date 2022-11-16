import { ArrowForward } from "@mui/icons-material";
import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { setNickname } from "../DiaryHome/DiaryHomeSlice";
import "./signIn.css";
import CompanyLogo from "../../components/CompanyLogo/CompanyLogo.js";
import { useNavigate } from "react-router-dom";

let randomNames = [
  "Liam",
  "Noah",
  "Oliver",
  "Elijah",
  "James",
  "William",
  "Benjamin",
  "Lucas",
  "Henry",
  "Theodore",
  "Jack",
  "Levi",
  "Alexander",
  "Jackson",
  "Mateo",
  "Daniel",
  "Michael",
  "Mason",
  "Sebastian",
  "Ethan",
  "Logan",
  "Owen",
  "Samuel",
];

const SignIn = () => {
  const [ranName, setRanName] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const getRandomName = () => {
    let ran = Math.floor(Math.random() * randomNames.length);
    setRanName(randomNames[ran]);
  };

  return (
    <Grid
      container
      className="signin-main-container"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#039BE5",
        background:
          "linear-gradient(-45deg, #039BE5 0%, #039BE5 33%, #00BCD4 100%)",
      }}
    >
      <Grid
        container
        className="signin-inner-container-bg-image"
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxNDQwIDgzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTQ0MCA4MzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7b3BhY2l0eTowLjI7fQoJLnN0MXtmaWx0ZXI6dXJsKCNBZG9iZV9PcGFjaXR5TWFza0ZpbHRlcik7fQoJLnN0MntmaWxsOiNGRkZGRkY7fQoJLnN0M3ttYXNrOnVybCgjbWFzay0yXzFfKTtmaWxsOiNGRkZGRkY7fQoJLnN0NHtmaWx0ZXI6dXJsKCNBZG9iZV9PcGFjaXR5TWFza0ZpbHRlcl8xXyk7fQoJLnN0NXttYXNrOnVybCgjbWFzay00XzFfKTtmaWxsOiNGRkZGRkY7fQoJLnN0NntvcGFjaXR5OjAuNDt9Cgkuc3Q3e29wYWNpdHk6NS4wMDAwMDBlLTAyO30KCS5zdDh7ZmlsdGVyOnVybCgjQWRvYmVfT3BhY2l0eU1hc2tGaWx0ZXJfMl8pO30KCS5zdDl7bWFzazp1cmwoI21hc2stNl8xXyk7ZmlsbDojRkZGRkZGO30KCS5zdDEwe29wYWNpdHk6MC4xO30KCS5zdDExe2ZpbHRlcjp1cmwoI0Fkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzNfKTt9Cgkuc3QxMnttYXNrOnVybCgjbWFzay04XzFfKTtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8dGl0bGU+R3JvdXA8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9IldlbGNvbWUiPgoJPGcgaWQ9IkRlc2t0b3AtSEQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtNzYuMDAwMDAwKSI+CgkJPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5LjAwMDAwMCwgNzYuMDAwMDAwKSI+CgkJCTxnIGlkPSJMaW5lIiBjbGFzcz0ic3QwIj4KCQkJCQoJCQkJCTxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTYuNTAwMDAwLCAxMzkuMTg2MTA5KSBzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtNzk2LjUwMDAwMCwgLTEzOS4xODYxMDkpIHRyYW5zbGF0ZSgwLjAwMDAwMCwgMC4xODYxMDkpIj4KCQkJCQk8ZyBpZD0iQ2xpcC0yIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJCQkJPC9maWx0ZXI+CgkJCQkJPC9kZWZzPgoJCQkJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTJfMV8iPgoJCQkJCQk8ZyBjbGFzcz0ic3QxIj4KCQkJCQkJCTxwb2x5Z29uIGlkPSJwYXRoLTFfMV8iIGNsYXNzPSJzdDIiIHBvaW50cz0iLTEwLDAgMTU4MywwIDE1ODMsMjc3LjMgLTEwLDI3Ny4zIAkJCQkJCQkiLz4KCQkJCQkJPC9nPgoJCQkJCTwvbWFzaz4KCQkJCQk8cGF0aCBpZD0iRmlsbC0xIiBjbGFzcz0ic3QzIiBkPSJNLTksMjMxLjd2LTI0LjFjLTAuMS0wLjEtMC4zLTAuMS0wLjQtMC4xQy0xMC45LDIwNy41LTksMjE0LjItOSwyMzEuN3ogTTEyMzEsMC4yCgkJCQkJCUM5OTIuNCw3LDQ5My40LDIyMi45LDI1MC45LDIyNC40Yy0xNjYsMC0yNjAtOTguMy0yNjAtOTguM3Y4MS40YzYsMi43LDQ0LjksNjEuNSwyNTMuNyw2OS4yYzguNiwwLjMsMTcuNCwwLjUsMjYuMywwLjUKCQkJCQkJYzI3MC4zLDAsNjg5LjktMTQwLjYsOTI4LjktMTQwLjZjNi44LDAsMTMuNSwwLjEsMjAsMC4zYzMyMC41LDExLjUsMzYzLjIsNTkuNywzNjMuMiw1OS43di03MC42YzAsMC0xMTMuNy0xMjYuMS0zMzUuNC0xMjYuMQoJCQkJCQlDMTI0Mi4yLDAsMTIzNi42LDAuMSwxMjMxLDAuMnogTTEzOTMsMjAuNGMzNi45LDEwLjQsNzIuMSwyNSwxMDQuNSw0My4yYzUzLjQsMzAsODIsNjAuMyw4NC4yLDYyLjh2NjgKCQkJCQkJYy01LjMtNC0yMC44LTEzLjUtNTkuNy0yMy44Yy0yOS41LTcuOC02Ni42LTE0LjYtMTEwLjEtMjBjLTU0LjMtNi44LTExOS0xMS42LTE5Mi4xLTE0LjJjLTYuNC0wLjItMTMuMi0wLjMtMjAtMC4zCgkJCQkJCWMtMTE2LDAtMjcyLjIsMzIuNi00MzcuNSw2Ny4xYy0xNzMuMSwzNi4xLTM1Mi4yLDczLjUtNDkxLjMsNzMuNWMtOSwwLTE3LjgtMC4yLTI2LjItMC41Yy03OC43LTIuOS0xNDIuNC0xMy40LTE4OS40LTMxLjEKCQkJCQkJYy0zNy41LTE0LjEtNTMuMy0yOC44LTYwLjEtMzVjLTEuNi0xLjQtMi40LTIuMi0zLjEtMi43di03OC41YzcsNi43LDI5LjUsMjcsNjUuMyw0N2MyNS42LDE0LjMsNTIuOSwyNS43LDgxLjIsMzMuOQoJCQkJCQljMzUuMywxMC4yLDcyLjMsMTUuNCwxMDkuOCwxNS40YzMyLjQtMC4yLDY2LjctMy41LDEwNy40LTEwLjJjMzYuMi02LDc2LjYtMTQuNSwxMjMuNS0yNmM4Ny4xLTIxLjQsMTgzLjYtNTAuMSwyNzYuOS03Ny45CgkJCQkJCWM4OC40LTI2LjMsMTc5LjktNTMuNiwyNjEuNi03My45QzExMDkuMiwxNC4yLDExNzksMi40LDEyMzEuMSwxYzUuNS0wLjIsMTEuMS0wLjIsMTYuNi0wLjJDMTI5OCwwLjcsMTM0Ni45LDcuMywxMzkzLDIwLjR6Ii8+CgkJCQk8L2c+CgkJCQkKCQkJCQk8ZyBpZD0iR3JvdXAtMy1Db3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTMuNDk0OTk3LCA2OTMuMDAwMDAwKSBzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtNzkzLjQ5NDk5NywgLTY5My4wMDAwMDApIHRyYW5zbGF0ZSgxOS40OTQ5OTcsIDU1NC4wMDAwMDApIj4KCQkJCQk8ZyBpZD0iQ2xpcC0yXzFfIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzFfIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQkJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJCQkJPC9maWx0ZXI+CgkJCQkJPC9kZWZzPgoJCQkJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJtYXNrLTRfMV8iPgoJCQkJCQk8ZyBjbGFzcz0ic3Q0Ij4KCQkJCQkJCTxwb2x5Z29uIGlkPSJwYXRoLTNfMV8iIGNsYXNzPSJzdDIiIHBvaW50cz0iLTEwLDAgMTUzNy4zLDAgMTUzNy4zLDI3Ny4zIC0xMCwyNzcuMyAJCQkJCQkJIi8+CgkJCQkJCTwvZz4KCQkJCQk8L21hc2s+CgkJCQkJPHBhdGggaWQ9IkZpbGwtMV8xXyIgY2xhc3M9InN0NSIgZD0iTS05LjQsMjA3LjVjLTEuNSwwLDAuNCw2LjcsMC40LDI0LjJ2LTI0LjFDLTkuMiwyMDcuNS05LjMsMjA3LjUtOS40LDIwNy41IE0xMjExLjYsMAoJCQkJCQljLTUuMywwLTEwLjcsMC4xLTE2LjIsMC4yQzk2My43LDcsNDc5LDIyMi45LDI0My40LDIyNC40Yy0wLjgsMC0xLjYsMC0yLjQsMGMtMTU4LjgsMC0yNTAuMS05OC4zLTI1MC4xLTk4LjN2ODEuNAoJCQkJCQljNS44LDIuNyw0My42LDYxLjUsMjQ2LjUsNjkuMmM4LjQsMC4zLDE2LjksMC41LDI1LjYsMC41YzI2Mi42LDAsNjcwLjEtMTQwLjYsOTAyLjItMTQwLjZjNi42LDAsMTMuMSwwLjEsMTkuNCwwLjMKCQkJCQkJYzMxMS4zLDExLjUsMzUyLjgsNTkuNywzNTIuOCw1OS43di03MC42QzE1MzcuMywxMjYuMSwxNDI2LjksMCwxMjExLjYsMCBNMTIxMS42LDAuN2M0OC45LDAsOTYuNCw2LjYsMTQxLjEsMTkuNgoJCQkJCQljMzUuOCwxMC40LDcwLDI1LDEwMS41LDQzLjJjNTEuOCwzMCw3OS42LDYwLjMsODEuOCw2Mi44djY4Yy01LjEtNC0yMC4yLTEzLjUtNTcuOS0yMy44Yy0yOC43LTcuOC02NC43LTE0LjYtMTA2LjktMjAKCQkJCQkJYy01Mi44LTYuOC0xMTUuNi0xMS42LTE4Ni42LTE0LjJjLTYuMi0wLjItMTIuOC0wLjMtMTkuNS0wLjNjLTExMi43LDAtMjY0LjQsMzIuNi00MjUsNjcuMWMtMTY4LjIsMzYuMS0zNDIuMSw3My41LTQ3Ny4yLDczLjUKCQkJCQkJYy04LjcsMC0xNy4zLTAuMi0yNS41LTAuNWMtNzYuNC0yLjktMTM4LjMtMTMuNC0xODMuOS0zMS4xYy0zNi40LTE0LjEtNTEuOC0yOC44LTU4LjMtMzVjLTEuNS0xLjQtMi40LTIuMi0zLjEtMi43di03OC41CgkJCQkJCWM2LjgsNi43LDI4LjYsMjcsNjMuNSw0N2MyNC45LDE0LjMsNTEuNCwyNS43LDc4LjgsMzMuOWMzNC4zLDEwLjIsNzAuMiwxNS40LDEwNi42LDE1LjRjMC44LDAsMS42LDAsMi40LDAKCQkJCQkJYzI5LjEtMC4yLDYyLjQtMy41LDEwMi0xMC4yYzM1LjEtNiw3NC40LTE0LjUsMTE5LjktMjZjODQuNi0yMS40LDE3OC4zLTUwLjEsMjY4LjktNzcuOUM4MjAuMiw4NC43LDkwOSw1Ny40LDk4OC4zLDM3LjEKCQkJCQkJYzg4LjgtMjIuOCwxNTYuNS0zNC42LDIwNy4xLTM2LjFDMTIwMC44LDAuOCwxMjA2LjIsMC43LDEyMTEuNiwwLjdMMTIxMS42LDAuNyIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnIGlkPSJXaW5nIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC4wMDAwMDAsIDUwNC4wMDAwMDApIiBjbGFzcz0ic3Q2Ij4KCQkJCTxnIGlkPSJHcm91cC0zXzFfIiBjbGFzcz0ic3Q3Ij4KCQkJCQk8ZyBpZD0iQ2xpcC0yXzJfIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzJfIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEwIiB5PSIwIiB3aWR0aD0iMTUzOSIgaGVpZ2h0PSIyNzciPgoJCQkJCQkJPGZlQ29sb3JNYXRyaXggIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgIDAgMSAwIDAgMCAgMCAwIDEgMCAwICAwIDAgMCAxIDAiLz4KCQkJCQkJPC9maWx0ZXI+CgkJCQkJPC9kZWZzPgoJCQkJCTxtYXNrIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEwIiB5PSIwIiB3aWR0aD0iMTUzOSIgaGVpZ2h0PSIyNzciIGlkPSJtYXNrLTZfMV8iPgoJCQkJCQk8ZyBjbGFzcz0ic3Q4Ij4KCQkJCQkJCTxwb2x5Z29uIGlkPSJwYXRoLTVfMV8iIGNsYXNzPSJzdDIiIHBvaW50cz0iMTAsMCAxNTQ5LDAgMTU0OSwyNzcgMTAsMjc3IAkJCQkJCQkiLz4KCQkJCQkJPC9nPgoJCQkJCTwvbWFzaz4KCQkJCQk8cGF0aCBpZD0iRmlsbC0xXzJfIiBjbGFzcz0ic3Q5IiBkPSJNMTU0OSwxOTYuNWMwLDAtNDEuMy00OC4xLTM1MC45LTU5LjZjLTIzNC4zLTguNy02NzUuMywxNDkuOC05NDIuMSwxMzkuNgoJCQkJCQlDLTE4LjYsMjY2LjEsMTAuOSwxNjAuOSwxMC45LDIzMS40VjEyNmMwLDAsOTEuNyw5OS4xLDI1MS4xLDk4LjJDNDk2LjQsMjIyLjcsOTc4LjUsNi45LDEyMDguOSwwLjIKCQkJCQkJQzE0MzMuNi02LjMsMTU0OSwxMjYsMTU0OSwxMjZWMTk2LjV6Ii8+CgkJCQk8L2c+CgkJCQk8ZyBpZD0iR3JvdXAtM18yXyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDQ2LjUzMDE4NCkiIGNsYXNzPSJzdDEwIj4KCQkJCQk8ZyBpZD0iQ2xpcC0yXzNfIj4KCQkJCQk8L2c+CgkJCQkJPGRlZnM+CgkJCQkJCTxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyXzNfIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjEwIiB5PSIwIiB3aWR0aD0iMTUzOSIgaGVpZ2h0PSIyMjMuMiI+CgkJCQkJCQk8ZmVDb2xvck1hdHJpeCAgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjEgMCAwIDAgMCAgMCAxIDAgMCAwICAwIDAgMSAwIDAgIDAgMCAwIDEgMCIvPgoJCQkJCQk8L2ZpbHRlcj4KCQkJCQk8L2RlZnM+CgkJCQkJPG1hc2sgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMTAiIHk9IjAiIHdpZHRoPSIxNTM5IiBoZWlnaHQ9IjIyMy4yIiBpZD0ibWFzay04XzFfIj4KCQkJCQkJPGcgY2xhc3M9InN0MTEiPgoJCQkJCQkJPHBvbHlnb24gaWQ9InBhdGgtN18xXyIgY2xhc3M9InN0MiIgcG9pbnRzPSIxMCwwIDE1NDksMCAxNTQ5LDIyMy4yIDEwLDIyMy4yIAkJCQkJCQkiLz4KCQkJCQkJPC9nPgoJCQkJCTwvbWFzaz4KCQkJCQk8cGF0aCBpZD0iRmlsbC0xXzNfIiBjbGFzcz0ic3QxMiIgZD0iTTE1NDksMTYyLjdjMCwwLTQxLjMtNTQuMi0zNTAuOS02Ny4yQzk2My44LDg1LjcsNTIyLjgsMjM0LDI1Ni4xLDIyMi42CgkJCQkJCWMtMjc0LjYtMTEuOC0yNDUuMS0xMDAtMjQ1LjEtMjAuNVY4My4yYzAsMCw4NS43LDE0MC41LDI0NS4xLDEzOS4zQzQ5MC40LDIyMC45LDk5Mi45LDgsMTIyMy40LDAuNAoJCQkJCQlDMTQ0OC4xLTYuOSwxNTQ5LDgzLjIsMTU0OSw4My4yVjE2Mi43eiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJPC9nPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=) no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid
          item
          xs={11}
          sm={10}
          md={8}
          lg={7}
          xl={6}
          className="signin-inner-container"
          style={{
            backgroundColor: "white",
            minHeight: "300px",
            borderRadius: "15px",
            boxShadow: "1px 1px 5px 2px rgba(0, 0, 0, 0.16)",
            padding: "25px 15px",
          }}
        >
          <CompanyLogo />
          <div
            className="signin-form-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="signin-form-title"
              style={{
                color: "#039BE5",
                fontSize: "2.125rem",
                fontWeight: "400",
                lineHeight: "1.17",
                paddingBottom: "30px",
              }}
            >
              {" "}
              Sign In{" "}
            </div>
            <div
              className="signin-form-nikname-input-container"
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "30px",
              }}
            >
              <RedditTextField
                label="Your Nickname*"
                value={ranName}
                onChange={(e) => {
                  setRanName(e.target.value);
                }}
                onBlur={() => {
                  setIsTouched(true);
                }}
                error={isTouched && ranName === ""}
                helperText={isTouched && ranName === "" ? "Required" : ""}
                id="reddit-input"
                variant="filled"
                className="signin-form-nickname-input"
                style={{
                  width: "400px",
                  backgroundColor: "white",
                }}
              />
              <Button
                variant="contained"
                className="signin-form-random-btn"
                style={{
                  borderRadius: "20px",
                  color: "white",
                  marginLeft: "30px",
                  boxShadow: "1px 2px 2px 1px rgba(0, 0, 0, 0.16)",
                  fontSize: ".95em",
                }}
                onClick={getRandomName}
              >
                {" "}
                RANDOM{" "}
              </Button>
            </div>
            <Button
              variant="contained"
              disabled={ranName === "" || ranName.length <= 3}
              onClick={() => {
                dispatch(setNickname(ranName));
                navigate("/home");
              }}
              className="signin-form-continue-btn"
              style={{
                borderRadius: "40px",
                padding: "8px 30px",
                fontSize: ".95em",
              }}
              endIcon={<ArrowForward />}
            >
              {" "}
              CONTINUE{" "}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 6,
    fontFamily: "Open Sans,sans-serif",
    letterSpace: "2px",
    height: "50px",
    color: "rgba(0, 0, 0, 0.87)",
    backgroundColor: "#ffffff",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
  },
}));

export default SignIn;
