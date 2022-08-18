import { Box, TextareaAutosize } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../App";
import styled from "styled-components";

const StyledTitle = styled.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 0px;
`;

const StyledName = styled.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 100;
  font-size: 15px;
  letter-spacing: -0.02em;
  color: #000000;
  opacity: 0.5;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const StyledDescription = styled.p`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 100;
  font-size: 17px;
  width: 100%;
  border: none;
  outline: none;
  overflow: hidden;
  letter-spacing: -0.02em;
  color: #000000;
  background-color: transparent;
  margin-top: 10px;
  margin-bottom: 20px;
`;

interface Props {
  title: string;
  name: string;
  description: string;
}

function DiaryCard(props: Props) {
  const { title, name, description } = props;
  const { user } = useContext(UserContext);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#BBF6FF",
        padding: "0px 10px",
        width: "300px",
        marginTop: "40px",
        marginBottom: "40px",
        alignItems: "start",
        justifyContent: "start",
        borderRadius: "12px",
      }}
    >
      <StyledTitle>{title}</StyledTitle>
      <StyledName>{name}</StyledName>
      <TextareaAutosize
        maxRows={100}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue={description}
        readOnly
        style={{
          fontFamily: "Nunito",
          fontStyle: "normal",
          fontWeight: "100",
          fontSize: "17px",
          width: "100%",
          border: "none",
          outline: "none",
          overflow: "hidden",
          letterSpacing: "-0.02em",
          color: "#000000",
          backgroundColor: "transparent",
          marginTop: "10px",
          marginBottom: "20px",
          resize: "none",
        }}
      />
    </Box>
  );
}

export default DiaryCard;
