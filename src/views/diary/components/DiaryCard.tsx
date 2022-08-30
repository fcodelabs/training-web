import { Grid, Box, TextareaAutosize } from "@mui/material";
import styled from "styled-components";
import { styled as materialStyled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { rgba } from "polished";

const SeeMoreButton = materialStyled(Button)({
  color: "black",
  background: "transparent",
  borderRadius: 16,
  fontFamily: "Nunito",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 18,
  lineHeight: "150%",
  textAlign: "center",
  letterSpacing: "-0.02em",
  textTransform: "capitalize",
  marginBottom: "10px",
  "&:hover": {
    background: rgba(194, 194, 194, 0.2),
  },
});

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

interface Props {
  title: string;
  name: string;
  description: string;
}

function DiaryCard(props: Props) {
  const [desc, setDesc] = useState("");
  const [clicked, setClicked] = useState(false);
  const { title, name, description } = props;
  useEffect(() => {
    description.length > 100
      ? setDesc(description.substring(0, 99).concat("..."))
      : setDesc(description);
  }, []);
  return (
    <Grid item xs={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#BBF6FF",
          padding: "0px 10px",
          marginBottom: "7px",
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
          defaultValue={desc}
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
        {description.length > 100 && (
          <SeeMoreButton
            onClick={() => {
              if (!clicked) {
                setDesc(description);
                setClicked(true);
              } else {
                setDesc(description.substring(0, 99).concat("..."));
                setClicked(false);
              }
            }}
          >
            {!clicked ? "Show More" : "Show Less"}
          </SeeMoreButton>
        )}
      </Box>
    </Grid>
  );
}

export default DiaryCard;
