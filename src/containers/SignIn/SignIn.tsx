import { useState } from "react";

import Input from "../../components/Inputs/Input";
import CustomizedButton from "../../components/Buttons/CustomizedButton";
import Logo from "../../components/Logo/Logo";

import Card from "@mui/material/Card";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import RandomButton from "../../components/Buttons/RandomButton";
import { useNavigate } from "react-router-dom"

export default function SignIn() {

  const [randomString, setRandomString] = useState<string>("");
  const navigate = useNavigate();


  const generateRandomString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    setRandomString(result);
    console.log(result);
  };

  const handleContinue = () => {
    navigate("/")
  }

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
            <Input
              label={randomString ? "" : "Your Nickname*"}
              width="395px"
              value={randomString}
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
