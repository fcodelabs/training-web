import { Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TimeStamp = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isSubmitted = useSelector((state: RootState) => state.submit.isSubmit);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setInterval(
        () => setSecondsElapsed((secondsElapsed) => secondsElapsed + 1),
        1000
      );
      return () => clearInterval(timer);
    }
  }, [isSubmitted]);

  const getDisplayTime = () => {
    const minutes = Math.floor(secondsElapsed / 60);
    return `${`     ${minutes} mins ago`}`;
  };
  return (
    <Typography
      sx={{
        fontFamily: "public Sans",
        fontSize: isMobile ? "11px" : "13px",
        color: "rgba(75, 70, 92, 0.5)",
      }}
    >
      {getDisplayTime()}
    </Typography>
  );
};

export default TimeStamp;
