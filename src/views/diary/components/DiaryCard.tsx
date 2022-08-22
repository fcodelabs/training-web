import { Grid, Box, TextareaAutosize } from "@mui/material";
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

interface Props {
  title: string;
  name: string;
  description: string;
}

function DiaryCard(props: Props) {
  const { title, name, description } = props;
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
    </Grid>
  );
}

export default DiaryCard;
