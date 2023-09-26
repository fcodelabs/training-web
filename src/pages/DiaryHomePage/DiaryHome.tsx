import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "../../theme/theme";
import DiaryCard from "../../components/DiaryCard/DiaryCard";

const DiaryHome: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isTitleFocused, setIsTitleFocused] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Title:", title);
    console.log("Description:", description);

    setTitle("");
    setDescription("");
  };

  const handleTitleFocus = () => {
    setIsTitleFocused(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div style={{ margin: "2rem" }}>
        <div style={{ display: "flex" }}>
          <h1 style={{ color: "white" }}>Home</h1>
          <h3
            style={{
              color: "#ecf0f1",
              marginLeft: "auto",
            }}
          >
            Your are here : Home
          </h3>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={handleTitleChange}
            onFocus={handleTitleFocus}
            placeholder="Enter title"
            style={{
              marginRight: "1rem",
              backgroundColor: "#3498db",
              borderRadius: "10px",
            }}
          />
          {isTitleFocused && (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                }}
              >
                Submit
              </Button>
            </>
          )}
        </div>

        {isTitleFocused && (
          <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter description"
              style={{
                backgroundColor: "#3498db",
                borderRadius: "10px",
              }}
            />
          </div>
        )}
      </div>

      <div style={{ margin: "2rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <DiaryCard
            title={"Hi"}
            username={"Nimesh"}
            description={"loewmwmwwmwmwmwmwm"}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DiaryHome;
